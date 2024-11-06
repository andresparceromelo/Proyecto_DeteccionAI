const { Pool } = require('pg');

const pool = new Pool({
    host: 'ep-summer-heart-a5ibvih0.us-east-2.aws.neon.tech',       // reemplaza con el Host de Neon
    database: 'neondb', // reemplaza con el Database de Neon
    user: 'neondb_owner',         // reemplaza con el User de Neon
    password: 'lVRDS7qT4ndQ', // reemplaza con el Password de Neon
    port: 5432                 // reemplaza si el puerto es diferente
});

module.exports = pool;
