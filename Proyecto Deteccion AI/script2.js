// scripts.js

// Función para cerrar sesión: puede redirigir o simplemente mostrar un mensaje
document.querySelector('.close-session').addEventListener('click', () => {
    alert('Cerrar sesión');
    window.location.href = 'index.html'; // Redirige a la página de inicio de sesión
});

// Función para encontrar la fila más cercana al botón
function findClosestRow(element) {
    while (element && element.tagName !== 'TR') {
        element = element.parentElement;
    }
    return element;
}

// Función para ver los detalles del reporte
document.querySelectorAll('table button').forEach(button => {
    button.addEventListener('click', (e) => {
        const row = findClosestRow(e.target); // Encuentra la fila más cercana al botón

        // Asegúrar de que 'row' es una fila válida antes de acceder a sus celdas
        if (row) {
            const reportId = row.cells[0].innerText.trim(); // Obtiene el ID de reporte (asumiendo que está en la primera celda)
            const applianceType = row.cells[2].innerText.trim(); // Obtiene el tipo de electrodoméstico (asumiendo que está en la tercera celda)

        // Redirige a la página de detalles específica según el tipo de electrodoméstico
        let url;
        if (applianceType === 'Nevera') {
            url = `reporte_detalle.html?id=${reportId}`;
        } else if (applianceType === 'Nevera2') {
            url = `detalle_nevera2.html?id=${reportId}`;
        } else if  (applianceType === 'Lavadora') {
            url = `detalle_lavadora.html?id=${reportId}`;
        }

        window.location.href = url;
        } else {
            console.error("No se encontró la fila correspondiente.");
        }
    });
});



