const db = require('../config/db'); // Asegúrate de que tienes la conexión a la BD en `config/db.js`

const Solicitud = {

  // Obtener todas las solicitudes
  obtenerTodas: (callback) => {
    const sql = "CALL ObtenerSolicitudes()";
    db.query(sql, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]); // El resultado está en la primera posición del array
    });
  },

  // Insertar una nueva solicitud (sin el idSolicitud, que se obtiene automáticamente)
  insertar: (fechaSolicitud, idPacientes, idMedicos, callback) => {
    // Obtención del idSolicitud automáticamente
    const obtenerMaxIdSql = "SELECT MAX(idSolicitud) AS maxId FROM tsolicitud"; // Consulta para obtener el máximo idSolicitud
    db.query(obtenerMaxIdSql, (err, result) => {
      if (err) return callback(err, null);
      const nuevoIdSolicitud = result[0].maxId ? result[0].maxId + 1 : 1; // Si no hay registros, se inicia con 1
      
      const sql = "CALL InsertarSolicitud(?, ?, ?, ?)";
      db.query(sql, [nuevoIdSolicitud, fechaSolicitud, idPacientes, idMedicos], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      });
    });
  },

  // Actualizar una solicitud existente
  actualizar: (idSolicitud, fechaSolicitud, idPacientes, idMedicos, callback) => {
    const sql = "CALL ActualizarSolicitud(?, ?, ?, ?)";
    db.query(sql, [idSolicitud, fechaSolicitud, idPacientes, idMedicos], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },

  // Eliminar una solicitud
  eliminar: (idSolicitud, callback) => {
    const sql = "CALL EliminarSolicitud(?)";
    db.query(sql, [idSolicitud], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
};

module.exports = Solicitud;
