const express = require('express');
const router = express.Router();
const storeTrailerflixController = require('../controllers/storeTrailerflixController'); // tabla pivote

router.get('/store/view',storeTrailerflixController.formattedListTrailerflix);
router.get('/store/view/id/:id',storeTrailerflixController.formattedIdTrailerflix);
router.get('/store/view/titulo/:titulo',storeTrailerflixController.obtenerStoreDescripcionTitulo);
router.get('/store', storeTrailerflixController.listarStoreTrailerflix);
router.get('/store/id/:id', storeTrailerflixController.obtenerStoreTrailerflix);
router.post('/store', storeTrailerflixController.crearStoreTrailerflix);// crea una registro de pelicula o serie o cuialquer categoria antes creada
router.put('/store/id/put/:id', storeTrailerflixController.actualizarStoreTrailerflix); // cambia solo la categoria
router.delete('/store/id/del/:id', storeTrailerflixController.eliminarStoreTrailerflix); // elimina el registro completo

module.exports = router;
