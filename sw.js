const CACHE='cal-policial-v11';
const ASSETS=['./','./index.html','./manifest.json','./icon.svg'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>
    Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  // Solo intercepta GETs
  if(e.request.method!=='GET')return;
  
  e.respondWith(
    fetch(e.request)
      .then(res=>{
        // Si llega respuesta de red, actualiza caché y devuelve
        const clone=res.clone();
        caches.open(CACHE).then(c=>c.put(e.request,clone));
        return res;
      })
      .catch(()=>
        // Sin red → sirve desde caché (modo offline)
        caches.match(e.request)
      )
  );
});
