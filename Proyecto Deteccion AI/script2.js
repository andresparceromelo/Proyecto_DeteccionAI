// scripts.js

// Función para cerrar sesión: puede redirigir o simplemente mostrar un mensaje
document.querySelector('.close-session').addEventListener('click', () => {
    alert('Cerrar sesión');
    window.location.href = 'index.html'; // Redirige a la página de inicio de sesión
});

// Ruta para generar un reporte

let app;
app.post('/generar_reporte', (req, res) => {
    const { idUsuario, comentarios } = req.body;

    const nuevoReporte = {
        ID_Usuario: idUsuario,
        Fecha_Reporte: new Date(),
        Estado: 'Pendiente',
        Comentarios: comentarios
    };

    // Insertar el reporte en la base de datos
    let sql = 'INSERT INTO Reportes SET ?';

    db.query(sql, nuevoReporte, (err, result) => {
        if (err) {
            res.status(500).send('Error al generar el reporte');
            throw err;
        }
        res.send('Reporte generado exitosamente');
    });
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
