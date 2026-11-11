/* VÉNUS global navigation: responsive, keyboard accessible, no dependencies */
(()=>{
 const navs=[...document.querySelectorAll('nav[data-global-nav]')];
 navs.forEach((nav,i)=>{
  nav.querySelectorAll('a[data-nav-link]').forEach(a=>{
   const target=new URL(a.href,location.href).pathname.split('/').pop()||'index.html';
   if(target===(location.pathname.split('/').pop()||'index.html'))a.setAttribute('aria-current','page');
  });
  const button=document.createElement('button');
  button.type='button';button.className='v-menu-toggle';
  button.textContent='MENÚ +';button.setAttribute('aria-expanded','false');
  button.setAttribute('aria-controls','venus-global-nav-'+i);
  nav.id='venus-global-nav-'+i;
  button.addEventListener('click',()=>{
   const open=button.getAttribute('aria-expanded')!=='true';
   button.setAttribute('aria-expanded',String(open));
   button.textContent=open?'CERRAR −':'MENÚ +';
   nav.classList.toggle('is-open',open);
  });
  nav.parentNode.insertBefore(button,nav);
  nav.addEventListener('click',e=>{
   if(e.target.closest('a')&&matchMedia('(max-width: 680px)').matches){
    nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.textContent='MENÚ +';
   }
  });
 });
})();