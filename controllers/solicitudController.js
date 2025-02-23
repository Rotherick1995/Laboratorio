const Solicitud = require('../models/solicitudModel');

// Obtener todas las solicitudes
const obtenerSolicitudes = (req, res) => {
  Solicitud.obtenerTodas((err, result) => {
    if (err) {
      console.error("Error al obtener solicitudes:", err.message);
      return res.status(500).json({ mensaje: "Error al obtener solicitudes" });
    }
    res.json(result);
  });
};

// Insertar una nueva solicitud (sin necesidad de enviar idSolicitud)
const insertarSolicitud = (req, res) => {
  const { fechaSolicitud, idPacientes, idMedicos } = req.body;

  if (!fechaSolicitud || !idPacientes || !idMedicos) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
  }

  // Insertar la solicitud, el idSolicitud se maneja automáticamente
  Solicitud.insertar(fechaSolicitud, idPacientes, idMedicos, (err, result) => {
    if (err) {
      console.error("Error al insertar solicitud:", err.message);
      return res.status(500).json({ mensaje: "Error al insertar solicitud" });
    }
    res.json({ mensaje: "Solicitud insertada correctamente", result });
  });
};

// Actualizar una solicitud existente
const actualizarSolicitud = (req, res) => {
  const { idSolicitud } = req.params;
  const { fechaSolicitud, idPacientes, idMedicos } = req.body;

  if (!fechaSolicitud || !idPacientes || !idMedicos) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
  }

  Solicitud.actualizar(idSolicitud, fechaSolicitud, idPacientes, idMedicos, (err, result) => {
    if (err) {
      console.error("Error al actualizar solicitud:", err.message);
      return res.status(500).json({ mensaje: "Error al actualizar solicitud" });
    }
    res.json({ mensaje: "Solicitud actualizada correctamente", result });
  });
};

// Eliminar una solicitud
const eliminarSolicitud = (req, res) => {
  const { idSolicitud } = req.params;

  Solicitud.eliminar(idSolicitud, (err, result) => {
    if (err) {
      console.error("Error al eliminar solicitud:", err.message);
      return res.status(500).json({ mensaje: "Error al eliminar solicitud" });
    }
    res.json({ mensaje: "Solicitud eliminada correctamente", result });
  });
};

module.exports = {
  obtenerSolicitudes,
  insertarSolicitud,
  actualizarSolicitud,
  eliminarSolicitud,
};
