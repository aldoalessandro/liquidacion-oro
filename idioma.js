// Cambia el idioma de la página: usa el elegido antes o el del navegador.
(function () {
  var disponibles = ["es", "en", "pt"];

  function usar(idioma) {
    document.documentElement.lang = idioma;
    document.querySelectorAll(".idiomas button").forEach(function (b) {
      b.classList.toggle("activo", b.dataset.usar === idioma);
    });
    try { localStorage.setItem("idioma", idioma); } catch (e) {}
  }

  var guardado = null;
  try { guardado = localStorage.getItem("idioma"); } catch (e) {}
  var navegador = (navigator.language || "es").slice(0, 2);
  usar(disponibles.indexOf(guardado) >= 0 ? guardado
       : disponibles.indexOf(navegador) >= 0 ? navegador : "en");

  document.querySelectorAll(".idiomas button").forEach(function (b) {
    b.addEventListener("click", function () { usar(b.dataset.usar); });
  });
})();
