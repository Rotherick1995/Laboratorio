const DetalleSolicitud = require('../models/tdetallesolicitudModel');

// Insertar un detalle de solicitud
const insertarDetalleSolicitud = (req, res) => {
  const { iddetallesol, idsolicitud, idprueba } = req.body;

  if (!iddetallesol || !idsolicitud || !idprueba) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  DetalleSolicitud.insertarDetalleSolicitud(iddetallesol, idsolicitud, idprueba, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al insertar el detalle de la solicitud' });
    res.status(201).json({ message: 'Detalle de solicitud insertado exitosamente', data: results });
  });
};

// Obtener todos los detalles de solicitud
const obtenerDetallesSolicitud = (req, res) => {
  DetalleSolicitud.obtenerDetallesSolicitud((err, results) => {
    if (err) return res.status(500).json({ message: 'Error al obtener los detalles de solicitud' });
    res.status(200).json({ message: 'Detalles de solicitud obtenidos exitosamente', data: results });
  });
};

// Actualizar un detalle de solicitud
const actualizarDetalleSolicitud = (req, res) => {
  // Capturar 'iddetallesol' de los parámetros de la URL
  const { iddetallesol } = req.params; // Aquí estás obteniendo el id desde la URL
  const { idsolicitud, idprueba } = req.body;

  console.log(`Datos recibidos - ID Detalle: ${iddetallesol}, ID Solicitud: ${idsolicitud}, ID Prueba: ${idprueba}`);

  if (!iddetallesol || !idsolicitud || !idprueba) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Llamar al procedimiento almacenado con el iddetallesol obtenido desde la URL
  DetalleSolicitud.actualizarDetalleSolicitud(iddetallesol, idsolicitud, idprueba, (err, results) => {
    if (err) {
      console.error('Error al actualizar detalle:', err); 
      return res.status(500).json({ message: 'Error al actualizar el detalle de la solicitud' });
    }
    res.status(200).json({ message: 'Detalle de solicitud actualizado exitosamente', data: results });
  });
};

// Eliminar un detalle de solicitud
const eliminarDetalleSolicitud = (req, res) => {
  const { iddetallesol_param } = req.params;

  DetalleSolicitud.eliminarDetalleSolicitud(iddetallesol_param, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al eliminar el detalle de la solicitud' });
    res.status(200).json({ message: 'Detalle de solicitud eliminado exitosamente', data: results });
  });
};

module.exports = { insertarDetalleSolicitud, obtenerDetallesSolicitud, actualizarDetalleSolicitud, eliminarDetalleSolicitud };
