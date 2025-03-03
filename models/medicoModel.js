const connection = require('../config/db');

const Medico = {
  obtenerMaxIdMedico: (callback) => {
    const query = 'SELECT MAX(idmedicos) AS maxId FROM tmedicos'; // Cambiar 'idMedico' por 'id'
    connection.query(query, callback);
  },

  insertar: (idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono, callback) => {
    const query = 'CALL insertarMedico(?, ?, ?, ?, ?, ?)';
    connection.query(query, [idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono], callback);
  },

  obtenerTodos: (callback) => {
    // Aquí faltaba la consulta, añádela cuando sea necesario
    const query = 'CALL obtenerMedicos()';
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
