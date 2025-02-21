const Reporte = require('../models/reportModel');

const insertarReporte = (req, res) => {
    const { idreporte, fechainicio, fechaentrega, prioridad, observaciones, estado, idsolicitud } = req.body;
  
    // Verificar que todos los campos obligatorios estén presentes
    if (!idreporte || !fechainicio || !fechaentrega || !prioridad || !observaciones || !estado || !idsolicitud) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
  
    // Insertar el reporte con el idreporte proporcionado manualmente
    Reporte.insertarReporte(fechainicio, fechaentrega, prioridad, observaciones, estado, idsolicitud, idreporte, (err, results) => {
      if (err) return res.status(500).json({ message: 'Error al insertar el reporte' });
      res.status(201).json({ message: 'Reporte insertado exitosamente', data: results });
    });
  };
  

const obtenerReportes = (req, res) => {
  Reporte.obtenerReportes((err, results) => {
    if (err) return res.status(500).json({ message: 'Error al obtener los reportes' });
    res.status(200).json({ message: 'Reportes obtenidos exitosamente', data: results });
  });
};

const actualizarReporte = (req, res) => {
  const { fechainicio, fechaentrega, prioridad, observaciones, estado, idsolicitud } = req.body;
  const { idreporte } = req.params;

  // Verificar que todos los campos obligatorios estén presentes
  if (!fechainicio || !fechaentrega || !prioridad || !observaciones || !estado || !idsolicitud) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Actualizar el reporte
  Reporte.actualizarReporte(idreporte, fechainicio, fechaentrega, prioridad, observaciones, estado, idsolicitud, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al actualizar el reporte' });
    res.status(200).json({ message: 'Reporte actualizado exitosamente', data: results });
  });
};

const eliminarReporte = (req, res) => {
  const { idreporte } = req.params;

  // Eliminar el reporte
  Reporte.eliminarReporte(idreporte, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al eliminar el reporte' });
    res.status(200).json({ message: 'Reporte eliminado exitosamente', data: results });
  });
};

module.exports = { insertarReporte, obtenerReportes, actualizarReporte, eliminarReporte };
