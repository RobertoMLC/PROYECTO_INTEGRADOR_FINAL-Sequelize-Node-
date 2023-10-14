const express = require('express');
const router = express.Router();
const trailerController = require('../controllers/trailerController');

// Rutas para las categorías
router.get('/trailer', trailerController.listarTrailer);
//router.post('/categorias', repartoController.crearCategoria);
router.get('/trailer/id/:id', trailerController.obtenerTrailer);
router.put('/trailer/id/put/:id', trailerController.actualizarTrailer);
router.delete('/trailer/id/del:id', trailerController.eliminarTrailer);

module.exports = router;
