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

  

  // Insertar una nueva solicitud
  insertar: (idSolicitud, fechaSolicitud, idPacientes, idMedicos, callback) => {
    const sql = "CALL InsertarSolicitud(?, ?, ?, ?)";
    db.query(sql, [idSolicitud, fechaSolicitud, idPacientes, idMedicos], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
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
