import { readFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const pages = ['index.html','app-v2.html','perfil.html','glowup.html','archivo.html','atelier.html'];
for (const page of pages) assert.ok(existsSync(page), 'Missing route: '+page);

for (const page of pages) {
  const html = readFileSync(page,'utf8');
  const matches = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  let inlineCount = 0;
  for (const [,attrs,source] of matches) {
    if (/\bsrc\s*=/i.test(attrs)) continue;
    const type = attrs.match(/\btype\s*=\s*["']?([^\s"'>]+)/i)?.[1]?.toLowerCase();
    if (type && !['text/javascript','application/javascript','module'].includes(type)) continue;
    if (!source.trim()) continue;
    new vm.Script(source,{filename:page+' inline script '+(++inlineCount)});
  }
  console.log('Syntax OK:',page,'('+inlineCount+' inline scripts)');
}

const test = readFileSync('app-v2.html','utf8');
for (const marker of ['resumeSavedQuiz','cl_temp_refine','cl_value_refine','cl_chroma_refine','skipCurrentModule','venusCapsuleChecklistV1','eclectic']) {
  assert.ok(test.includes(marker),'Expected VÉNUS test feature missing: '+marker);
}
console.log('VÉNUS feature smoke checks passed.');
