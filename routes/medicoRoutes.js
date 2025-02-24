const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');


router.post('/medicos', medicoController.insertarMedico);


router.get('/medicos', medicoController.obtenerMedicos);


router.put('/medicos/:idMedico', medicoController.actualizarMedico);


router.delete('/medicos/:idMedico', medicoController.eliminarMedico);

module.exports = router;