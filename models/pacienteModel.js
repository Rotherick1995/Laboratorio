const connection = require('../config/db');

const Paciente = {
  // Obtener todos los pacientes
  obtenerTodos: (callback) => {
    const query = 'CALL obtenerPacientes()';  // Asegúrate de tener este procedimiento en la base de datos si necesitas
    connection.query(query, callback);
  },

  // Insertar un paciente
  insertar: (nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias, callback) => {
    const query = 'CALL insertarPaciente(?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias], callback);
  },

  // Actualizar un paciente
  actualizar: (idPaciente, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias, callback) => {
    const query = 'CALL actualizarPaciente(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [idPaciente, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias], callback);
  },

  // Eliminar un paciente
  eliminar: (idPaciente, callback) => {
    const query = 'CALL eliminarPaciente(?)';
    connection.query(query, [idPaciente], callback);
  }
};

module.exports = Paciente;
