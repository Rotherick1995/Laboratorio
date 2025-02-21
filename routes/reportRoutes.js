const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Ruta para obtener todos los reportes
router.get('/reportes', reportController.obtenerReportes);

// Ruta para insertar un nuevo reporte
router.post('/reportes', reportController.insertarReporte);

// Ruta para actualizar un reporte
router.put('/reportes/:idreporte', reportController.actualizarReporte);

// Ruta para eliminar un reporte
router.delete('/reportes/:idreporte', reportController.eliminarReporte);

module.exports = router;
