const Paciente = require('../models/pacienteModel');

// Función para insertar un nuevo paciente (POST)
const insertarPaciente = (req, res) => {
  const { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias } = req.body;

  Paciente.insertar(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al insertar el paciente' });
    res.status(201).json({ message: 'Paciente insertado exitosamente', data: results });
  });
};

// Función para obtener todos los pacientes (GET)
const obtenerPacientes = (req, res) => {
  Paciente.obtenerTodos((err, results) => {
    if (err) return res.status(500).json({ message: 'Error al obtener pacientes' });
    res.status(200).json({ data: results });
  });
};

// Función para actualizar un paciente (PUT)
const actualizarPaciente = (req, res) => {
  const { idPaciente, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias } = req.body;

  Paciente.actualizar(idPaciente, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al actualizar el paciente' });
    res.status(200).json({ message: 'Paciente actualizado exitosamente', data: results });
  });
};

// Función para eliminar un paciente (DELETE)
const eliminarPaciente = (req, res) => {
  const { idPaciente } = req.params;

  Paciente.eliminar(idPaciente, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al eliminar el paciente' });
    res.status(200).json({ message: 'Paciente eliminado exitosamente', data: results });
  });
};

module.exports = { insertarPaciente, obtenerPacientes, actualizarPaciente, eliminarPaciente };