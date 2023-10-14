const express = require('express');
const router = express.Router();
const tipoGeneroController = require('../controllers/tipoGeneroController');

// Rutas para las categorías
router.get('/tipogen', tipoGeneroController.listarTipoGenero);
router.post('/tipogen', tipoGeneroController.crearTipoGenero);
router.get('/tipogen/id/:id', tipoGeneroController.obtenerTipoGenero);
router.put('/tipogen/id/put/:id', tipoGeneroController.actualizarTipoGenero);
router.delete('/tipogen/id/del:id', tipoGeneroController.eliminarTipoGenero);

module.exports = router;
