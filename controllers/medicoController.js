const Medico = require('../models/medicoModel');

const insertarMedico = (req, res) => {
  const { idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono } = req.body;

  if (!idMedico || !nombre || !apellidoPaterno || !apellidoMaterno || !especialidad) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
  }

  Medico.insertar(idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono, (err, result) => {
    if (err) {
      console.error("Error al insertar médico:", err.message);
      return res.status(500).json({ mensaje: "Error al insertar médico" });
    }
    res.json({ mensaje: "Médico insertado correctamente", result });
  });
};

const obtenerMedicos = (req, res) => {
  Medico.obtenerTodos((err, result) => {
    if (err) {
      console.error("Error al obtener médicos:", err.message);
      return res.status(500).json({ mensaje: "Error al obtener médicos" });
    }
    res.json(result);
  });
};

const actualizarMedico = (req, res) => {
    const { nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono } = req.body;
    const { idMedico } = req.params; // Extraemos el idMedico de los parámetros de la URL
  
    // Verificamos si los campos necesarios están presentes
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !especialidad) {
      return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
    }
  
    // Llamamos a la función de actualizar y le pasamos el idMedico de la URL
    Medico.actualizar(idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono, (err, result) => {
      if (err) {
        console.error("Error al actualizar médico:", err.message);
        return res.status(500).json({ mensaje: "Error al actualizar médico" });
      }
      res.json({ mensaje: "Médico actualizado correctamente", result });
    });
  };

const eliminarMedico = (req, res) => {
  const { idMedico } = req.params;

  if (!idMedico) {
    return res.status(400).json({ mensaje: "El ID del médico es obligatorio." });
  }

  Medico.eliminar(idMedico, (err, result) => {
    if (err) {
      console.error("Error al eliminar médico:", err.message);
      return res.status(500).json({ mensaje: "Error al eliminar médico" });
    }
    res.json({ mensaje: "Médico eliminado correctamente", result });
  });
};

module.exports = {
  insertarMedico,
  obtenerMedicos,
  actualizarMedico,
  eliminarMedico
};