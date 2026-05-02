const CACHE='cal-policial-v12';
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
  if(e.request.method!=='GET')return;

  e.respondWith(
    caches.open(CACHE).then(cache=>
      cache.match(e.request).then(cached=>{
        // Actualiza caché en background siempre
        const fetchPromise=fetch(e.request).then(res=>{
          if(res&&res.status===200)cache.put(e.request,res.clone());
          return res;
        }).catch(()=>{});

        // Sirve caché si existe (inmediato), si no espera red
        return cached||fetchPromise;
      })
    )
  );
});
