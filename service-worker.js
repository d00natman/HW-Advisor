const CACHE='hwa-pwa-v0.7';
const LOCAL=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./account-v1.schema.json','./example-empty-account-v1.json','./README.txt','./THIRD_PARTY_LICENSES/NOTICE.txt','./THIRD_PARTY_LICENSES/APACHE-2.0.txt','./THIRD_PARTY_LICENSES/HERO_WARS_FAN_NOTICE.txt'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(LOCAL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(resp=>{
    const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;
  }).catch(()=>caches.match('./index.html'))));
});
