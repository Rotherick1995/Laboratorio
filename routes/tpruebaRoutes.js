const express = require('express');
const router = express.Router();
const tpruebaController = require('../controllers/tpruebaController');

// Ruta para insertar una prueba
router.post('/pruebas', tpruebaController.insertarPrueba);

// Ruta para obtener todas las pruebas
router.get('/pruebas', tpruebaController.obtenerPruebas);

// Ruta para actualizar una prueba
router.put('/pruebas/:idprueba', tpruebaController.actualizarPrueba);

// Ruta para eliminar una prueba
router.delete('/pruebas/:idprueba', tpruebaController.eliminarPrueba);

module.exports = router;