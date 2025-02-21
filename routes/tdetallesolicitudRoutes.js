const express = require('express');
const router = express.Router();
const tdetallesolicitudController = require('../controllers/tdetallesolicitudController');

// Ruta para insertar un detalle de solicitud
router.post('/detalle', tdetallesolicitudController.insertarDetalleSolicitud);

// Ruta para obtener todos los detalles de solicitud
router.get('/detalle', tdetallesolicitudController.obtenerDetallesSolicitud);

// Ruta para actualizar un detalle de solicitud
router.put('/detalle/:iddetallesol', tdetallesolicitudController.actualizarDetalleSolicitud);

// Ruta para eliminar un detalle de solicitud
router.delete('/detalle/:iddetallesol', tdetallesolicitudController.eliminarDetalleSolicitud);

module.exports = router;
