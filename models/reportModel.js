const db = require('../config/db'); // Asegúrate de tener la configuración de tu base de datos

module.exports = {
  // Insertar reporte
  insertarReporte: (fechainicio, fechaentrega, prioridad, observaciones, estado, idsolicitud, callback) => {
    // Obtener el valor máximo del idreporte
    const sqlMaxId = "SELECT MAX(idreporte) AS max_id FROM treporte"; // Asegúrate de que la tabla sea 'treporte'
    
    db.query(sqlMaxId, (err, resultMax) => {
      if (err) return callback(err, null);
      
      // Generar el nuevo idreporte
      const nuevoIdReporte = resultMax[0].max_id ? resultMax[0].max_id + 1 : 1; // Si no hay resultados, comenzamos con 1

      // Ahora inserta el reporte con el nuevo idreporte generado
      const sql = "CALL InsertarReporte(?, ?, ?, ?, ?, ?, ?)";
      
      // Ejecutamos el procedimiento almacenado
      db.query(sql, [fechainicio, fechaentrega, prioridad, observaciones, estado, idsolicitud, nuevoIdReporte], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      });
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
