const CACHE_NAME = "esp-switch-pwa-v3";
 
 const CORE_ASSETS = [
   "./",
   "./index.html",
   "./manifest.json",
   "./icon-192.png",
   "./icon-512.png"
 ];
 
 self.addEventListener("install", event => {
   event.waitUntil(
     caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
   );
   self.skipWaiting();
 });
 
 self.addEventListener("activate", event => {
   event.waitUntil(
     caches.keys().then(keys =>
       Promise.all(
         keys.map(key => {
           if (key !== CACHE_NAME) {
             return caches.delete(key);
           }
         })
