importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

console.log('HALLA BALLA');

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
