const mariadb = require('mariadb');
require('dotenv').config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,  // Servidor de la base de datos
  user: process.env.DB_USER,  // Usuario de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña del usuario
  database: process.env.DB_NAME, // Nombre de la base de datos
  connectionLimit: 5, // Límite de conexiones simultáneas
});

async function getConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conectado a la base de datos MariaDB');
    return connection;
  } catch (err) {
    console.error('❌ Error de conexión a la base de datos:', err);
    throw err;
  }
}

module.exports = { getConnection };

