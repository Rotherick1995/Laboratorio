const db = require('../config/db'); // Asegúrate de que tu conexión a la base de datos esté configurada correctamente

// Insertar resultado
const insertarResultado = (idresultado, iddetallesol, resultado, unidad, callback) => {
  db.query('CALL InsertarResultado(?, ?, ?, ?)', [idresultado, iddetallesol, resultado, unidad], (err, results) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null, results);
  });
};

// Obtener todos los resultados
const obtenerResultados = (callback) => {
  db.query('CALL ObtenerResultados()', (err, results) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null, results);
  });
};

// Actualizar un resultado
const actualizarResultado = (idresultado, iddetallesol, resultado, unidad, callback) => {
  db.query('CALL ActualizarResultado(?, ?, ?, ?)', [idresultado, iddetallesol, resultado, unidad], (err, results) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null, results);
  });
};

// Eliminar un resultado
const eliminarResultado = (idresultado, callback) => {
  db.query('CALL EliminarResultado(?)', [idresultado], (err, results) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null, results);
  });
};

module.exports = {
  insertarResultado,
  obtenerResultados,
  actualizarResultado,
  eliminarResultado
};
