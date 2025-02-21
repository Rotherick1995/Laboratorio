// routes/solicitudRoutes.js
const express = require('express');
const router = express.Router();
const solicitudController = require('../controllers/solicitudController');

// Ruta para obtener todas las solicitudes
router.get('/solicitudes', solicitudController.obtenerSolicitudes);

// Ruta para insertar una nueva solicitud
router.post('/solicitudes', solicitudController.insertarSolicitud);

// Ruta para actualizar una solicitud
router.put('/solicitudes/:idSolicitud', solicitudController.actualizarSolicitud);

// Ruta para eliminar una solicitud
router.delete('/solicitudes/:idSolicitud', solicitudController.eliminarSolicitud);

module.exports = router;