
(function(){
  var pages={},cur=null;
  document.querySelectorAll('.spa-page').forEach(function(e){pages[e.dataset.page]=e;});
  var hdr=document.getElementById('hdr');
  var cats=[];document.querySelectorAll('[data-mn-cat]').forEach(function(e){cats.push(e.dataset.mnCat);});
  function parse(h){
    h=decodeURIComponent((h||'').replace(/^#/,''));
    if(h.indexOf('!')===0){h=h.slice(1);var i=h.indexOf('#');var path=i<0?h:h.slice(0,i);return{path:path||'/',sub:i<0?'':h.slice(i+1)};}
    if(h&&cats.indexOf(h)>-1)return{path:'/menu/',sub:h};
    return{path:'/',sub:''};
  }
  function show(path,sub,instant){
    if(!pages[path])path='/';
    var changed=path!==cur;
    if(changed){
      Object.keys(pages).forEach(function(k){pages[k].hidden=(k!==path);});
      cur=path;document.title=pages[path].dataset.title;
      if(hdr){if(path==='/'){delete hdr.dataset.solid;}else{hdr.dataset.solid='1';hdr.classList.add('solid');}hdr.classList.remove('away');}
      document.querySelectorAll('a[href^="#!/"]').forEach(function(a){
        var t=a.getAttribute('href').slice(2).split('#')[0];
        if((a.classList.contains('navlink')||a.classList.contains('mlink'))){if(t===path)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');}
      });
      window.scrollTo(0,0);
      window.dispatchEvent(new Event('scroll'));
    }
    if(path==='/menu/'&&sub){
      var tab=document.querySelector('.mn-tab[data-mn-tab="'+sub+'"]');
      if(tab){tab.click();history.replaceState(null,'','#!/menu/');}
    } else if(path==='/menu/'&&changed){
      var all=document.querySelector('.mn-tab[data-mn-tab="all"]');if(all)all.click();history.replaceState(null,'','#!/menu/');
    }
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href^="#!/"]');if(!a)return;
    e.preventDefault();var r=parse(a.getAttribute('href'));
    history.pushState(null,'','#!'+r.path+(r.sub?'#'+r.sub:''));show(r.path,r.sub);
  });
  window.addEventListener('popstate',function(){var r=parse(location.hash);show(r.path,r.sub);});
  window.addEventListener('hashchange',function(){var r=parse(location.hash);if(r.path!==cur)show(r.path,r.sub);});
  var r0=parse(location.hash);
  if(r0.path!=='/'||r0.sub)window.addEventListener('load',function(){show(r0.path,r0.sub);});
})();

(function(){var w=document.getElementById('wz');if(!w)return;function f(){w.classList.toggle('quiet',/\/menu\/?/.test(location.pathname+location.hash))}f();addEventListener('hashchange',f)})();
