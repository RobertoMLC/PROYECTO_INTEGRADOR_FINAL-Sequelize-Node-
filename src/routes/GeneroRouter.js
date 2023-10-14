const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');


router.get('/genero/find/:tipoGen', generoController.listarGeneroStore)
router.get('/genero', generoController.listarGenero);
//router.post('/categorias', repartoController.crearCategoria);
router.get('/genero/id/:id', generoController.obtenerGenero);
router.put('/genero/id/put/:id', generoController.actualizarGenero);
router.delete('/genero/id/del:id', generoController.eliminarGenero);

module.exports = router;
