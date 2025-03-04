const db = require('../config/db');

// Obtener el último ID de resultados
const obtenerUltimoIdResultado = (callback) => {
  db.query('SELECT MAX(idresultado) AS ultimoId FROM tresultados', (err, results) => {
    if (err) {
      console.error('Error al obtener el último ID:', err);
      return callback(err);
    }
    const ultimoId = results[0].ultimoId || 0; // Si no hay registros, empieza desde 0
    callback(null, ultimoId);
  });
};

// Insertar resultado con ID autoincremental en la app
const insertarResultado = (iddetallesol, resultado, unidad, callback) => {
  obtenerUltimoIdResultado((err, ultimoId) => {
    if (err) return callback(err);

    const nuevoId = ultimoId + 1; // Incrementar el ID manualmente
    db.query('CALL InsertarResultado(?, ?, ?, ?)', [nuevoId, iddetallesol, resultado, unidad], (err, results) => {
      if (err) {
        console.error('Error al insertar el resultado:', err);
        return callback(err);
      }
      callback(null, results);
    });
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

// Actualizar resultado
const actualizarResultado = (idresultado, iddetallesol, resultado, unidad, callback) => {
  db.query('CALL ActualizarResultado2(?, ?, ?, ?)', [idresultado, iddetallesol, resultado, unidad], (err, results) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null, results);
  });
};

// Eliminar resultado
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
  eliminarResultado,
};