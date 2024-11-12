function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Mostrar la sección seleccionada
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Mostrar la sección del Menú Principal al cargar la página
window.onload = function() {
    showSection('main-menu');
};