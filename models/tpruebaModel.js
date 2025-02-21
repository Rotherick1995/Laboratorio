const db = require('../config/db');  // Asegúrate de tener un archivo para la conexión DB

// Procedimiento para insertar una prueba
const insertarPrueba = (idprueba, nombre, descripcion, valorreferencia, idarea, callback) => {
  db.query('CALL InsertarPrueba(?, ?, ?, ?, ?)', [idprueba, nombre, descripcion, valorreferencia, idarea], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Procedimiento para obtener todas las pruebas
const obtenerPruebas = (callback) => {
  db.query('CALL ObtenerPruebas()', (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Procedimiento para actualizar una prueba
const actualizarPrueba = (idprueba, nombre, descripcion, valorreferencia, idarea, callback) => {
  db.query('CALL ActualizarPrueba(?, ?, ?, ?, ?)', [idprueba, nombre, descripcion, valorreferencia, idarea], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Procedimiento para eliminar una prueba
const eliminarPrueba = (idprueba, callback) => {
  db.query('CALL EliminarPrueba(?)', [idprueba], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = {
  insertarPrueba,
  obtenerPruebas,
  actualizarPrueba,
  eliminarPrueba
};