const Resultado = require('../models/tresultadosModel');

// Insertar resultado
const insertarResultado = (req, res) => {
  const { idresultado, iddetallesol, resultado, unidad } = req.body;

  if (!idresultado || !iddetallesol || !resultado) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  Resultado.insertarResultado(idresultado, iddetallesol, resultado, unidad, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error al insertar el resultado' });
    }
    res.status(201).json({ message: 'Resultado insertado exitosamente', data: results });
  });
};

// Obtener todos los resultados
const obtenerResultados = (req, res) => {
  Resultado.obtenerResultados((err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error al obtener los resultados' });
    }
    res.status(200).json({ data: results });
  });
};

// Actualizar un resultado
const actualizarResultado = (req, res) => {
  const { idresultado } = req.params;
  const { iddetallesol, resultado, unidad } = req.body;

  if (!iddetallesol || !resultado) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  Resultado.actualizarResultado(idresultado, iddetallesol, resultado, unidad, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error al actualizar el resultado' });
    }
    res.status(200).json({ message: 'Resultado actualizado exitosamente', data: results });
  });
};

// Eliminar un resultado
const eliminarResultado = (req, res) => {
  const { idresultado } = req.params;

  Resultado.eliminarResultado(idresultado, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error al eliminar el resultado' });
    }
    res.status(200).json({ message: 'Resultado eliminado exitosamente', data: results });
  });
};

module.exports = {
  insertarResultado,
  obtenerResultados,
  actualizarResultado,
  eliminarResultado
};
