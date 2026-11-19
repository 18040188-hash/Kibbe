import { readFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const pages = ['index.html','app-v2.html','perfil.html','glowup.html','archivo.html','atelier.html','visual-test.html','test.html','app.html'];
for (const page of pages) assert.ok(existsSync(page), 'Missing route: '+page);

function localPath(raw) {
  if (!raw || raw.startsWith('#') || raw.startsWith('%23') || raw.startsWith('data:') || raw.startsWith('blob:') || raw.startsWith('javascript:') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.includes('${') || /^https?:\/\//i.test(raw)) return null;
  const clean=raw.split(/[?#]/)[0];
  return clean.replace(/^\/+/, '');
}

for (const page of pages) {
  const html = readFileSync(page,'utf8');
  const ids=[...html.matchAll(/\bid=["']([^"']+)["']/g)].map(m=>m[1]);
  const duplicates=ids.filter((id,i)=>ids.indexOf(id)!==i);
  assert.deepEqual([...new Set(duplicates)],[], 'Duplicate IDs in '+page);
  const idSet=new Set(ids);
  const brokenAnchors=[...html.matchAll(/href=["']#([^"']+)["']/g)].map(m=>m[1]).filter(id=>!idSet.has(id));
  assert.deepEqual(brokenAnchors,[], 'Broken in-page anchors in '+page);

  for(const [,raw] of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)){
    const path=localPath(raw);
    if(path)assert.ok(existsSync(path),'Missing local reference in '+page+': '+raw);
  }

  const matches = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  let inlineCount = 0;
  for (const [,attrs,source] of matches) {
    if (/\bsrc\s*=/i.test(attrs)) continue;
    const type = attrs.match(/\btype\s*=\s*["']?([^\s"'>]+)/i)?.[1]?.toLowerCase();
    if (type && !['text/javascript','application/javascript','module'].includes(type)) continue;
    if (!source.trim()) continue;
    new vm.Script(source,{filename:page+' inline script '+(++inlineCount)});
  }
  console.log('Static OK:',page,'('+inlineCount+' inline scripts)');
}

const css=readFileSync('styles.css','utf8');
for(const [,raw] of css.matchAll(/url\((?:["']?)([^"')]+)(?:["']?)\)/g)){
  const path=localPath(raw);
  if(path)assert.ok(existsSync(path),'Missing local CSS asset: '+raw);
}

const test = readFileSync('app-v2.html','utf8');
for (const marker of ['resumeSavedQuiz','cl_temp_refine','cl_value_refine','cl_chroma_refine','skipCurrentModule','venusCapsuleChecklistV1','eclectic','function venusEscapeHTML','${venusEscapeHTML(f)}','${venusEscapeHTML(c.why)}','${venusEscapeHTML(t.tip)}','${venusEscapeHTML(sa.styleNote)}','8*1024*1024','image/webp','function loadImageFile']) {
  assert.ok(test.includes(marker),'Expected VÉNUS test feature missing: '+marker);
}
const glowup=readFileSync('glowup.html','utf8');
for(const marker of ['obBack(1)','obBack(2)','venusGlowUpLocalProfile','venusGlowUpPlan','venusGlowUpDiary','function readLocalDiary','function deleteEntry','function escapeHTML','${escapeHTML(e.text)}','${escapeHTML(e.aiNote)}','${escapeHTML(i)}']){
 assert.ok(glowup.includes(marker),'Expected Glow Up resilience feature missing: '+marker);
}
const atelier=readFileSync('atelier.html','utf8');
for(const marker of ['function safeColor','function safePhoto','data:image\\/(?:jpeg|png|webp)','safePhoto(x.photo)']) assert.ok(atelier.includes(marker),'Expected Style Lab import sanitization missing: '+marker);
assert.equal((atelier.match(/\\.lab-nav'\\)\\.addEventListener\\('keydown'/g)||[]).length,1,'Duplicate Style Lab keyboard navigation handler');
for(const page of ['index.html','app-v2.html','glowup.html','archivo.html']){
 const html=readFileSync(page,'utf8');
 assert.ok(!html.includes('/assets/img/PDF/pagina-'),'Legacy broken PDF image path remains in '+page);
}
console.log('VÉNUS smoke checks passed: routes, local assets, anchors, IDs, CSS URLs, scripts, test features, Glow Up persistence and image paths.');
