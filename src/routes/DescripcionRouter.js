const express = require('express');
const router = express.Router();
const descripcionController = require('../controllers/descripcionController');

// Rutas para las categorías
router.get('/descripcion', descripcionController.listarDescripcion);
//router.post('/categorias', repartoController.crearCategoria);
router.get('/descripcion/id/:id', descripcionController.obtenerDescripcion);
router.put('/descripcion/id/put/:id', descripcionController.actualizarDescripcion);
router.delete('/descripcion/id/del:id', descripcionController.eliminarDescripcion);

module.exports = router;
