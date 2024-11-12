const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'qualitec'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos');
});

// Ruta para generar un reporte
app.post('/generar_reporte', (req, res) => {
    const { idUsuario, comentarios } = req.body;

    const nuevoReporte = {
        ID_Usuario: idUsuario,
        Fecha_Reporte: new Date(),
        Estado: 'Pendiente',
        Comentarios: comentarios
    };

    // Consulta para insertar datos
    let sql = "INSERT INTO reportes (ID_Usuario, Fecha_Reporte, Estado, Comentarios) VALUES (?, ?, ?, ?)";
    let values = [nuevoReporte.ID_Usuario, nuevoReporte.Fecha_Reporte, nuevoReporte.Estado, nuevoReporte.Comentarios];

    db.query(sql, values, (err) => {
        if (err) {
            res.status(500).send('Error al generar el reporte');
            console.error(err);
            return;
        }
        res.send('Reporte generado exitosamente');
    });
});
