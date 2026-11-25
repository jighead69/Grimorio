// Service worker mínimo: permite instalar o Grimório como app.
// Não guarda nada em cache; tudo vem sempre atualizado da internet.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){});
