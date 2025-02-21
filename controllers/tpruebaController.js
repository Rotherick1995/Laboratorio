const Prueba = require('../models/tpruebaModel');

// Insertar una nueva prueba
const insertarPrueba = (req, res) => {
  const { idprueba, nombre, descripcion, valorreferencia, idarea } = req.body;

  // Verificar que los campos obligatorios estén presentes
  if (!idprueba || !nombre || !valorreferencia || !idarea) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Llamar al procedimiento almacenado para insertar la prueba
  Prueba.insertarPrueba(idprueba, nombre, descripcion, valorreferencia, idarea, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al insertar la prueba' });
    res.status(201).json({ message: 'Prueba insertada exitosamente', data: results });
  });
};

// Obtener todas las pruebas
const obtenerPruebas = (req, res) => {
  Prueba.obtenerPruebas((err, results) => {
    if (err) return res.status(500).json({ message: 'Error al obtener las pruebas' });
    res.status(200).json({ message: 'Pruebas obtenidas exitosamente', data: results });
  });
};

// Actualizar una prueba
const actualizarPrueba = (req, res) => {
  const { idprueba } = req.params;
  const { nombre, descripcion, valorreferencia, idarea } = req.body;

  // Verificar que los campos obligatorios estén presentes
  if (!nombre || !valorreferencia || !idarea) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Llamar al procedimiento almacenado para actualizar la prueba
  Prueba.actualizarPrueba(idprueba, nombre, descripcion, valorreferencia, idarea, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al actualizar la prueba' });
    res.status(200).json({ message: 'Prueba actualizada exitosamente', data: results });
  });
};

// Eliminar una prueba
const eliminarPrueba = (req, res) => {
  const { idprueba } = req.params;

  Prueba.eliminarPrueba(idprueba, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al eliminar la prueba' });
    res.status(200).json({ message: 'Prueba eliminada exitosamente', data: results });
  });
};

module.exports = {
  insertarPrueba,
  obtenerPruebas,
  actualizarPrueba,
  eliminarPrueba
};
