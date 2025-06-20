self.addEventListener("install", event => {
  console.log("✅ Librari Service Worker instalado");
});

self.addEventListener("activate", event => {
  console.log("🌀 Librari Service Worker ativado");
});

self.addEventListener("fetch", event => {
  // Aqui podemos futuramente adicionar cache offline
});
