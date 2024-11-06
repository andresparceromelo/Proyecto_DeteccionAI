const express = require('express');
const pool = require('./db');  // Archivo de conexión a la base de datos

const app = express();
const PORT = 3000;

app.get('/api/reportes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM reportes');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los reportes' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
