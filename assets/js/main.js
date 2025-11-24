// Small helpers: highlight active nav link and insert year
(function(){
  try{
    const loc = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(a=>{
      if(a.getAttribute('href')===loc || (a.getAttribute('href')==='index.html' && loc==='')){
        a.classList.add('active');
      }
    });
  }catch(e){/* silent */}

  // insert year
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el){ el.textContent = y; }
})();
