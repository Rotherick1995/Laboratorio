const AreaLaboratorio = require('../models/tarealaboratorioModel');

// Insertar un área de laboratorio
const insertarArea = (req, res) => {
  const { nombre, descripcion, idarea } = req.body;

  // Verificar que los campos obligatorios estén presentes
  if (!nombre || !descripcion || !idarea) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Llamar al procedimiento almacenado para insertar el área
  AreaLaboratorio.insertarArea(nombre, descripcion, idarea, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al insertar el área de laboratorio' });
    res.status(201).json({ message: 'Área de laboratorio insertada exitosamente', data: results });
  });
};

// Obtener todas las áreas de laboratorio
const obtenerAreas = (req, res) => {
  AreaLaboratorio.obtenerAreas((err, results) => {
    if (err) return res.status(500).json({ message: 'Error al obtener las áreas de laboratorio' });
    res.status(200).json({ message: 'Áreas obtenidas exitosamente', data: results });
  });
};

// Actualizar un área de laboratorio
const actualizarArea = (req, res) => {
  const { idarea } = req.params;
  const { nombre, descripcion } = req.body;

  // Verificar que los campos obligatorios estén presentes
  if (!nombre || !descripcion) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Llamar al procedimiento almacenado para actualizar el área
  AreaLaboratorio.actualizarArea(idarea, nombre, descripcion, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al actualizar el área de laboratorio' });
    res.status(200).json({ message: 'Área de laboratorio actualizada exitosamente', data: results });
  });
};

// Eliminar un área de laboratorio
const eliminarArea = (req, res) => {
  const { idarea } = req.params;

  AreaLaboratorio.eliminarArea(idarea, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al eliminar el área de laboratorio' });
    res.status(200).json({ message: 'Área de laboratorio eliminada exitosamente', data: results });
  });
};

module.exports = {
  insertarArea,
  obtenerAreas,
  actualizarArea,
  eliminarArea
};
