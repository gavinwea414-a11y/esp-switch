diff --git a/service-worker.js b/service-worker.js
index ed7aa86c3afe1d59c0f33e8ad8793f23ac270224..5bfdf1571f157396f7a61d09aeae978d715e90b4 100644
--- a/service-worker.js
+++ b/service-worker.js
@@ -1,26 +1,26 @@
-const CACHE_NAME = "esp-switch-pwa-v2";
+const CACHE_NAME = "esp-switch-pwa-v3";
 
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
