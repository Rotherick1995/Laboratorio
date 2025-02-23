const db = require('../config/db');

// Obtener el último ID de prueba
const obtenerUltimoIdPrueba = (callback) => {
  db.query('SELECT MAX(idprueba) AS ultimoId FROM tprueba', (err, results) => {
    if (err) {
      console.error('Error al obtener el último ID de prueba:', err);
      return callback(err, null);
    }
    const ultimoId = results[0].ultimoId || 0; // Si no hay registros, empieza en 0
    callback(null, ultimoId);
  });
};

// Insertar prueba con ID generado automáticamente desde la app
const insertarPrueba = (nombre, descripcion, valorreferencia, idarea, callback) => {
  obtenerUltimoIdPrueba((err, ultimoId) => {
    if (err) return callback(err, null);

    const nuevoId = ultimoId + 1; // Incrementar el ID manualmente
    db.query('CALL InsertarPrueba(?, ?, ?, ?, ?)', [nuevoId, nombre, descripcion, valorreferencia, idarea], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  });
};

// Obtener todas las pruebas
const obtenerPruebas = (callback) => {
  db.query('CALL ObtenerPruebas()', (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Actualizar prueba
const actualizarPrueba = (idprueba, nombre, descripcion, valorreferencia, idarea, callback) => {
  db.query('CALL ActualizarPrueba(?, ?, ?, ?, ?)', [idprueba, nombre, descripcion, valorreferencia, idarea], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Eliminar prueba
const eliminarPrueba = (idprueba, callback) => {
  db.query('CALL EliminarPrueba(?)', [idprueba], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

module.exports = {
  insertarPrueba,
  obtenerPruebas,
  actualizarPrueba,
  eliminarPrueba
};
