const express = require('express');
const router = express.Router();
const repartoController = require('../controllers/repartoController');

// Rutas para las categorías
router.get('/reparto', repartoController.listarReparto);
//router.post('/categorias', repartoController.crearCategoria);
router.get('/reparto/id/:id', repartoController.obtenerReparto);
router.put('/reparto/id/put/:id', repartoController.actualizarReparto);
router.delete('/reparto/id/del:id', repartoController.eliminarReparto);

module.exports = router;
