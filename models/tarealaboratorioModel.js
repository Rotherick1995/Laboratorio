const db = require('../config/db');  // Asegúrate de tener tu archivo para la conexión DB

// Procedimiento para insertar un área de laboratorio con auto incremento en la app
const insertarArea = (nombre, descripcion, callback) => {
  // Primero obtenemos el último idarea
  db.query('SELECT MAX(idarea) AS max_id FROM tarealaboratorio', (err, result) => {
    if (err) {
      return callback(err, null);
    }

    // Si no hay ningún registro, el primer id será 1
    const nuevoIdArea = result[0].max_id ? result[0].max_id + 1 : 1;

    // Ahora insertamos el área con el nuevo id generado
    db.query('CALL InsertarAreaLaboratorio(?, ?, ?)', [nombre, descripcion, nuevoIdArea], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
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
