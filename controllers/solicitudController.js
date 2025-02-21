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

// Insertar una nueva solicitud
const insertarSolicitud = (req, res) => {
    const { idSolicitud, fechaSolicitud, idPacientes, idMedicos } = req.body;
  
    if (!idSolicitud || !fechaSolicitud || !idPacientes || !idMedicos) {
      return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
    }
  
    Solicitud.insertar(idSolicitud, fechaSolicitud, idPacientes, idMedicos, (err, result) => {
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
