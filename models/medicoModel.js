const connection = require('../config/db');

const Medico = {
  insertar: (idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono, callback) => {
    const query = 'CALL insertarMedico(?, ?, ?, ?, ?, ?)';
    connection.query(query, [idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono], callback);
  },

  obtenerTodos: (callback) => {
    //const query = 'CALL obtenerMedicos()';
    connection.query(query, callback);
  },

  actualizar: (idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono, callback) => {
    const query = 'CALL actualizarMedico(?, ?, ?, ?, ?, ?)';
    connection.query(query, [idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono], callback);
  },

  eliminar: (idMedico, callback) => {
    const query = 'CALL eliminarMedico(?)';
    connection.query(query, [idMedico], callback);
  }
};

module.exports = Medico;