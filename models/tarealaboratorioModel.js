const db = require('../config/db');  // Asegúrate de tener un archivo para la conexión DB

// Procedimiento para insertar un área de laboratorio
const insertarArea = (nombre, descripcion, idarea, callback) => {
  db.query('CALL InsertarAreaLaboratorio(?, ?, ?)', [nombre, descripcion, idarea], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Procedimiento para obtener todas las áreas de laboratorio
const obtenerAreas = (callback) => {
  db.query('CALL ObtenerAreasLaboratorio()', (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Procedimiento para actualizar un área de laboratorio
const actualizarArea = (idarea, nombre, descripcion, callback) => {
  db.query('CALL ActualizarAreaLaboratorio(?, ?, ?)', [idarea, nombre, descripcion], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Procedimiento para eliminar un área de laboratorio
const eliminarArea = (idarea, callback) => {
  db.query('CALL EliminarAreaLaboratorio(?)', [idarea], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = {
  insertarArea,
  obtenerAreas,
  actualizarArea,
  eliminarArea
};
