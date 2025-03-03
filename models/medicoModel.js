const connection = require('../config/db');

const Medico = {
  obtenerMaxIdMedico: (callback) => {
    const query = 'SELECT MAX(idmedicos) AS maxId FROM tmedicos';
    console.log("Ejecutando consulta:", query); // 🔍 Registrar consulta SQL
    connection.query(query, callback);
  },

  insertar: (idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono, callback) => {
    const query = 'CALL insertarMedico(?, ?, ?, ?, ?, ?)';
    console.log("Datos enviados para inserción:", { idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono });
    connection.query(query, [idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono], callback);
  },

  actualizar: (idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono, callback) => {
    const query = 'CALL actualizarMedico(?, ?, ?, ?, ?, ?)';
    console.log("Datos enviados para actualización:", { idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono });
    connection.query(query, [idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono], callback);
  },

  eliminar: (idMedico, callback) => {
    const query = 'CALL eliminarMedico(?)';
    console.log("ID enviado para eliminación:", idMedico);
    connection.query(query, [idMedico], callback);
  }
};

module.exports = Medico;
