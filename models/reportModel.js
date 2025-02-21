const db = require('../config/db')// Asegúrate de tener la configuración de tu base de datos

module.exports = {
  insertarReporte: (fechainicio, fechaentrega, prioridad, observaciones, estado, idsolicitud, idreporte, callback) => {
    const sql = "CALL InsertarReporte(?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [fechainicio, fechaentrega, prioridad, observaciones, estado, idsolicitud, idreporte], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },

  obtenerReportes: (callback) => {
    const sql = "CALL ObtenerReportes()";
    db.query(sql, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },

  actualizarReporte: (idreporte, fechainicio, fechaentrega, prioridad, observaciones, estado, idsolicitud, callback) => {
    const sql = "CALL ActualizarReporte(?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [idreporte, fechainicio, fechaentrega, prioridad, observaciones, estado, idsolicitud], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },

  eliminarReporte: (idreporte, callback) => {
    const sql = "CALL EliminarReporte(?)";
    db.query(sql, [idreporte], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
};