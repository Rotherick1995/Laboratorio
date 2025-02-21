const express = require('express');
const router = express.Router();
const tresultadosController = require('../controllers/tresultadosController');

// Ruta para insertar un resultado
router.post('/resultados', tresultadosController.insertarResultado);

// Ruta para obtener todos los resultados
router.get('/resultados', tresultadosController.obtenerResultados);

// Ruta para actualizar un resultado
router.put('/resultados/:idresultado', tresultadosController.actualizarResultado);

// Ruta para eliminar un resultado
router.delete('/resultados/:idresultado', tresultadosController.eliminarResultado);

module.exports = router;
