const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reportes'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos');
});

// Ruta para generar un reporte
app.post('/generar_reporte', (req, res) => {
    const { idUsuario, comentarios } = req.body; // Solo desestructuramos lo que vamos a usar
    
    const nuevoReporte = {
        ID_Usuario: idUsuario,
        Fecha_Reporte: new Date(),
        Estado: 'Pendiente',
        Comentarios: comentarios
    };

    // Insertar el reporte en la base de datos
    let sql = 'INSERT INTO Reportes SET ?';
    
    db.query(sql, nuevoReporte, (err) => {
        if (err) {
            res.status(500).send('Error al generar el reporte');
            throw err;
        }
        res.send('Reporte generado exitosamente');
    });
});

// Configuración del servidor para escuchar en un puerto específico
app.listen(3306, () => {
    console.log('Servidor corriendo en el puerto 3000');
});