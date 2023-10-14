const express = require('express');
const router = express.Router();
const actoresController = require('../controllers/actoresController');


router.get('/actores', actoresController.listarActores);
router.post('/actor', actoresController.crearActor);
router.get('/actor/id/:id', actoresController.obtenerActor);
router.put('/actor/id/put/:id', actoresController.actualizarActor);
router.delete('/actor/id/del/:id', actoresController.eliminarActor);

module.exports = router;
