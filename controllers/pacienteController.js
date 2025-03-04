const Paciente = require('../models/pacienteModel');

// Obtener todos los pacientes
const obtenerPacientes = (req, res) => {
  Paciente.obtenerTodos((err, results) => {
    if (err) {
      console.error("Error al obtener pacientes:", err.message);
      return res.status(500).json({ mensaje: "Error al obtener pacientes" });
    }
    res.json(results[0]); // Asumiendo que `results[0]` es donde vienen los datos
  });
};

// Insertar un paciente
const insertarPaciente = (req, res) => {
  const { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias } = req.body;

  // Validaciones básicas
  if (!nombre || !apellidoPaterno || !apellidoMaterno || !fechaNacimiento) {
    return res.status(400).json({ mensaje: "Todos los campos obligatorios deben completarse." });
  }

  // Llamar al modelo para insertar el paciente
  Paciente.insertar(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias, (err) => {
    if (err) {
      console.error("Error al insertar paciente:", err.message);
      return res.status(500).json({ mensaje: "Error al agregar paciente" });
    }
    res.json({ mensaje: "Paciente agregado correctamente" });
  });
};

// Actualizar un paciente
const actualizarPaciente = (req, res) => {
  const idPaciente = Number(req.params.id);
  const { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias } = req.body;

  if (!idPaciente) {
    return res.status(400).json({ mensaje: "ID del paciente es obligatorio." });
  }

  if (!nombre || !apellidoPaterno || !apellidoMaterno || !fechaNacimiento) {
    return res.status(400).json({ mensaje: "Todos los campos obligatorios deben completarse." });
  }

  Paciente.actualizar(idPaciente, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias, (err) => {
    if (err) {
      console.error("Error al actualizar paciente:", err.message);
      return res.status(500).json({ mensaje: "Error al actualizar paciente" });
    }
    res.json({ mensaje: "Paciente actualizado correctamente" });
  });
};

// Eliminar un paciente
const eliminarPaciente = (req, res) => {
  const idPaciente = Number(req.params.id);

  if (!idPaciente) {
    return res.status(400).json({ mensaje: "ID del paciente es obligatorio." });
  }

  Paciente.eliminar(idPaciente, (err) => {
    if (err) {
      console.error("Error al eliminar paciente:", err.message);
      return res.status(500).json({ mensaje: "Error al eliminar paciente" });
    }
    res.json({ mensaje: "Paciente eliminado correctamente" });
  });
};

module.exports = {
  obtenerPacientes,
  insertarPaciente,
  actualizarPaciente,
  eliminarPaciente
};
