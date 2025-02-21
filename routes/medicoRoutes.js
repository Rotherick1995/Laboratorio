const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

// Ruta para insertar un médico
router.post('/medicos', medicoController.insertarMedico);

// Ruta para obtener todos los médicos
router.get('/medicos', medicoController.obtenerMedicos);

// Ruta para actualizar un médico
router.put('/medicos/:idMedico', medicoController.actualizarMedico);

// Ruta para eliminar un médico
router.delete('/medicos/:idMedico', medicoController.eliminarMedico);

module.exports = router;