function showSection(id) {
  const sections = document.querySelectorAll("main > section");
  sections.forEach(section => section.hidden = true);
  document.getElementById(id).hidden = false;
}

// También podemos cargar contenido inicial para el formulario, galería, etc.
window.addEventListener("DOMContentLoaded", () => {
  showSection("nuevoCaso");

  // Ejemplo de contenido mínimo para cada sección
  document.getElementById("nuevoCaso").innerHTML = "<h2>Nuevo Caso</h2><p>Formulario próximamente.</p>";
  document.getElementById("galeria").innerHTML = "<h2>Galería</h2><p>Casos registrados aparecerán aquí.</p>";
});
