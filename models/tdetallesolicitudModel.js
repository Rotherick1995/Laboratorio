const db = require('../config/db'); // Conexión a la base de datos

// Obtener el último ID de detalle de solicitud
const obtenerUltimoIdDetalleSolicitud = (callback) => {
  db.query('SELECT MAX(iddetallesol) AS ultimoId FROM tdetallesolicitud', (err, results) => {
    if (err) {
      console.error(err);
      return callback(err, null);
    }
    const ultimoId = results[0].ultimoId || 0; // Si no hay registros, inicia en 0
    callback(null, ultimoId);
  });
};

// Insertar detalle de solicitud con ID generado en la app
const insertarDetalleSolicitud = (iddetallesol, idsolicitud, idprueba, callback) => {
  db.query('CALL InsertarDetalleSolicitud(?, ?, ?)', [iddetallesol, idsolicitud, idprueba], (err, results) => {
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

module.exports = { 
  obtenerUltimoIdDetalleSolicitud,
  insertarDetalleSolicitud, 
  obtenerDetallesSolicitud, 
  actualizarDetalleSolicitud, 
  eliminarDetalleSolicitud 
};
