// JavaScript para mostrar y ocultar secciones
document.getElementById("principal").style.display = "block";
document.getElementById("multimedia").style.display = "none";
document.getElementById("comparacion").style.display = "none";
document.getElementById("estadisticas").style.display = "none";

document.querySelector('nav').addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    var targetId = event.target.getAttribute('href').substring(1);
    var sections = document.querySelectorAll('section');

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].id === targetId) {
        sections[i].style.display = "block";
      } else {
        sections[i].style.display = "none";
      }
    }
  }
});

function toggleText() {
  var text = document.getElementById("long-text");
  var link = document.getElementById("toggle-link");

  if (text.classList.contains("hidden")) {
    text.classList.remove("hidden");
    text.classList.add("visible");
    link.textContent = "Ocultar descripcion completa";
  } else {
    text.classList.remove("visible");
    text.classList.add("hidden");
    link.textContent = "Ver descripcion completa";
  }
}