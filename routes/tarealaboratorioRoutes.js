const express = require('express');
const router = express.Router();
const tarealaboratorioController = require('../controllers/tarealaboratorioController');

// Ruta para insertar un área de laboratorio
router.post('/area', tarealaboratorioController.insertarArea);

// Ruta para obtener todas las áreas de laboratorio
router.get('/area', tarealaboratorioController.obtenerAreas);

// Ruta para actualizar un área de laboratorio
router.put('/area/:idarea', tarealaboratorioController.actualizarArea);

// Ruta para eliminar un área de laboratorio
router.delete('/area/:idarea', tarealaboratorioController.eliminarArea);

module.exports = router;