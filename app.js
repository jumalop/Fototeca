function showSection(id) {
  const sections = document.querySelectorAll("main > section");
  sections.forEach(section => section.hidden = true);
  document.getElementById(id).hidden = false;
}

window.addEventListener("DOMContentLoaded", () => {
  showSection("nuevoCaso");

  // Formulario completo de nuevo caso
  document.getElementById("nuevoCaso").innerHTML = `
    <h2>Nuevo Caso</h2>
    <form id="casoForm">
      <label>Nombre y Apellido: <input type="text" name="nombre" required></label><br>
      <label>Edad: <input type="number" name="edad" required></label><br>
      <label>Género:
        <select name="genero" required>
          <option value="">Seleccione</option>
          <option value="Femenino">Femenino</option>
          <option value="Masculino">Masculino</option>
          <option value="Otro">Otro</option>
        </select>
      </label><br>
      <label>Número de OSEP: <input type="text" name="osep" required></label><br>
      <label>Diagnóstico: <input type="text" name="diagnostico" required></label><br>
      <label>Hallazgos: <textarea name="hallazgos" required></textarea></label><br>
      <label>Tipo de frotis:
        <select name="tipoFrotis" required>
          <option value="">Seleccione</option>
          <option value="Sangre Periférica">Sangre Periférica</option>
          <option value="Médula Ósea">Médula Ósea</option>
          <option value="Impronta Ganglionar">Impronta Ganglionar</option>
          <option value="Otro">Otro</option>
        </select>
      </label><br>
      <label>Fecha: <input type="date" name="fecha" required></label><br>
      <label>Resumen de Historia Clínica: <textarea name="resumen" required></textarea></label><br>
      <label>Imagen del frotis: <input type="file" name="imagen" accept="image/*" required></label><br>
      <button type="submit">Guardar Caso</button>
    </form>
  `;

  document.getElementById("galeria").innerHTML = "<h2>Galería</h2><p>Los casos se mostrarán aquí.</p>";

  document.getElementById("casoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Caso guardado (funcionalidad en desarrollo).");
    document.getElementById("casoForm").reset();
  });
});
