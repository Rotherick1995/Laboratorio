const connection = require('../config/db');

const Paciente = {
  obtenerMaxIdPaciente: (callback) => {
    const query = 'SELECT MAX(idPaciente) AS maxId FROM tpacientes';
    connection.query(query, callback);
  },

  insertar: (idPaciente, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias, callback) => {
    const query = 'CALL insertarPaciente(?, ?, ?, ?, ?, ?, ?, ?, ?,?)';
    connection.query(query, [idPaciente, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias], callback);
  },

  obtenerTodos: (callback) => {
    const query = 'CALL obtenerPacientes()';
    connection.query(query, callback);
  },

  actualizar: (idPaciente, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias, callback) => {
    const query = 'CALL actualizarPaciente(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [idPaciente, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias], callback);
  },

  eliminar: (idPaciente, callback) => {
    const query = 'CALL eliminarPaciente(?)';
    connection.query(query, [idPaciente], callback);
  }
};

module.exports = Paciente;
