// scripts.js

// Función para cerrar sesión: puede redirigir o simplemente mostrar un mensaje
document.querySelector('.close-session').addEventListener('click', () => {
    alert('Cerrar sesión');
    window.location.href = 'index.html'; // Redirige a la página de inicio de sesión
});

// Función para ver los detalles del reporte
document.querySelectorAll('table button').forEach(button => {
    button.addEventListener('click', (e) => {
        const row = e.target.closest('tr'); // Encuentra la fila más cercana al botón
        const reportId = row.cells[0].innerText; // Asume que el ID del reporte está en la primera celda

        // Redirige a la página de detalles del reporte con el ID en la URL
        window.location.href = `reporte_detalle.html?id=${reportId}`;
    });
});
