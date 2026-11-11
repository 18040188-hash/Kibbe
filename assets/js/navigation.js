/* VÉNUS — navegación global accesible, compartida por las cinco páginas */
(()=> {
 const menus=[...document.querySelectorAll('[data-global-nav]')];
 menus.forEach((menu,index)=>{
  const links=[...menu.querySelectorAll('a[data-nav-link]')];
  if(!links.length)return;
  const currentPath=location.pathname.split('/').pop()||'index.html';
  links.forEach(link=>{
   const target=new URL(link.href,location.href).pathname.split('/').pop()||'index.html';
   if(target===currentPath)link.setAttribute('aria-current','page');
   else link.removeAttribute('aria-current');
  });
  if(menu.previousElementSibling?.classList.contains('v-menu-toggle'))return;
  const button=document.createElement('button');
  const menuId=menu.id||'venus-global-nav-'+index;
  menu.id=menuId;
  button.type='button';
  button.className='v-menu-toggle';
  button.textContent='MENÚ +';
  button.setAttribute('aria-label','Abrir menú de navegación');
  button.setAttribute('aria-expanded','false');
  button.setAttribute('aria-controls',menuId);
  const closeMenu=()=>{
   menu.classList.remove('is-open');
   button.setAttribute('aria-expanded','false');
   button.setAttribute('aria-label','Abrir menú de navegación');
   button.textContent='MENÚ +';
  };
  button.addEventListener('click',()=>{
   const open=button.getAttribute('aria-expanded')!=='true';
   menu.classList.toggle('is-open',open);
   button.setAttribute('aria-expanded',String(open));
   button.setAttribute('aria-label',open?'Cerrar menú de navegación':'Abrir menú de navegación');
   button.textContent=open?'CERRAR −':'MENÚ +';
  });
  menu.addEventListener('click',event=>{
   if(event.target.closest('a[data-nav-link]')&&window.matchMedia('(max-width: 680px)').matches)closeMenu();
  });
  menu.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();button.focus();}});
  button.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  menu.parentNode.insertBefore(button,menu);
 });
})();