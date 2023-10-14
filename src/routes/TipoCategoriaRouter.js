const express = require('express');
const router = express.Router();
const tipoCategoriaController = require('../controllers/tipoCategoriaController');

// Rutas para las categorías
router.get('/tipocat/find/:findCat', tipoCategoriaController.listarTipoCategoriasStore);
router.get('/tipocat', tipoCategoriaController.listarTipoCategorias);
router.post('/tipocat', tipoCategoriaController.crearTipoCategorias);
router.get('/tipocat/id/:id', tipoCategoriaController.obtenerTipoCategorias);
router.put('/tipocat/id/put/:id', tipoCategoriaController.actualizarTipoCategoria);
router.delete('/tipocat/id/del/:id', tipoCategoriaController.eliminarTipoCategoria);

module.exports = router;
