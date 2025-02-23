const DetalleSolicitud = require('../models/tdetallesolicitudModel');

// Insertar un nuevo detalle de solicitud con ID generado automáticamente
const insertarDetalleSolicitud = (req, res) => {
  const { idsolicitud, idprueba } = req.body;

  // Verificar que los campos obligatorios estén presentes
  if (!idsolicitud || !idprueba) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Obtener el último ID y sumar 1
  DetalleSolicitud.obtenerUltimoIdDetalleSolicitud((err, ultimoId) => {
    if (err) return res.status(500).json({ message: 'Error al obtener el último ID' });

    const nuevoId = ultimoId + 1;

    // Insertar el nuevo detalle con el ID generado
    DetalleSolicitud.insertarDetalleSolicitud(nuevoId, idsolicitud, idprueba, (err, results) => {
      if (err) return res.status(500).json({ message: 'Error al insertar el detalle de la solicitud' });
      res.status(201).json({ message: 'Detalle de solicitud insertado exitosamente', data: { iddetallesol: nuevoId, ...results } });
    });
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
  const { iddetallesol } = req.params;
  const { idsolicitud, idprueba } = req.body;

  if (!idsolicitud || !idprueba) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  DetalleSolicitud.actualizarDetalleSolicitud(iddetallesol, idsolicitud, idprueba, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al actualizar el detalle de la solicitud' });
    res.status(200).json({ message: 'Detalle de solicitud actualizado exitosamente', data: results });
  });
};

// Eliminar un detalle de solicitud
const eliminarDetalleSolicitud = (req, res) => {
  const { iddetallesol } = req.params;

  DetalleSolicitud.eliminarDetalleSolicitud(iddetallesol, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al eliminar el detalle de la solicitud' });
    res.status(200).json({ message: 'Detalle de solicitud eliminado exitosamente', data: results });
  });
};

module.exports = { 
  insertarDetalleSolicitud, 
  obtenerDetallesSolicitud, 
  actualizarDetalleSolicitud, 
  eliminarDetalleSolicitud 
};
