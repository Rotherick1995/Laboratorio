const db = require('../config/db');  // Asegúrate de tener tu conexión a la base de datos

// Insertar detalle de solicitud
const insertarDetalleSolicitud = (idsolicitud, idprueba, callback) => {
  db.query('CALL InsertarDetalleSolicitud(?, ?)', [idsolicitud, idprueba], (err, results) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null, results);
  });
};

// Obtener todos los detalles de solicitud
const obtenerDetallesSolicitud = (callback) => {
  db.query('CALL ObtenerDetallesSolicitud()', (err, results) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null, results);
  });
};

// Actualizar detalle de solicitud
const actualizarDetalleSolicitud = (iddetallesol, idsolicitud, idprueba, callback) => {
  db.query('CALL ActualizarDetalleSolicitud(?, ?, ?)', [iddetallesol, idsolicitud, idprueba], (err, results) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null, results);
  });
};

// Eliminar detalle de solicitud
const eliminarDetalleSolicitud = (iddetallesol, callback) => {
  db.query('CALL EliminarDetalleSolicitud(?)', [iddetallesol], (err, results) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null, results);
  });
};

module.exports = { insertarDetalleSolicitud, obtenerDetallesSolicitud, actualizarDetalleSolicitud, eliminarDetalleSolicitud };
