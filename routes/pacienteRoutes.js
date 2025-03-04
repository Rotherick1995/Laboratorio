const express = require('express');
const pacienteController = require('../controllers/pacienteController');
const router = express.Router();

// Obtener todos los pacientes
router.get('/pacientes', pacienteController.obtenerPacientes);

// Insertar un paciente
router.post('/pacientes', pacienteController.insertarPaciente);

// Actualizar un paciente
router.put('/pacientes/:id', pacienteController.actualizarPaciente);

// Eliminar un paciente
router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

module.exports = router;