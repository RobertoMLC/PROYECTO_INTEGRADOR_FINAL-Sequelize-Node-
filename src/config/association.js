
const Actores = require("../models/actores");
const Reparto = require('../models/Reparto');
const TipoGenero = require('../models/TipoGenero');
const Genero = require('../models/Genero');
const Descripcion = require('../models/Descripcion');
const TipoCategoria = require('../models/TipoCategoria');
const Trailer = require('../models/Trailer');
const StoreTrailerflix = require('../models/StoreTrailerflix');

Reparto.belongsTo(Actores,{foreignKey:"actor1",as:"NombreActor1"});
Reparto.belongsTo(Actores,{foreignKey:"actor2",as:"NombreActor2"});
Reparto.belongsTo(Actores,{foreignKey:"actor3",as:"NombreActor3"});
Reparto.belongsTo(Actores,{foreignKey:"actor4",as:"NombreActor4"});
Reparto.belongsTo(Actores,{foreignKey:"actor5",as:"NombreActor5"});
Reparto.belongsTo(Actores,{foreignKey:"actor6",as:"NombreActor6"});
Reparto.belongsTo(Actores,{foreignKey:"actor7",as:"NombreActor7"});
//-------------------------------------------------------
Genero.belongsTo(TipoGenero,{foreignKey:"tipoGenero1",as:"Genero1"});
Genero.belongsTo(TipoGenero,{foreignKey:"tipoGenero2",as:"Genero2"});
Genero.belongsTo(TipoGenero,{foreignKey:"tipoGenero3",as:"Genero3"});
//-----------------------------------------------
StoreTrailerflix.belongsTo(TipoCategoria,{foreignKey:"TipoCategoriaId",as:"Categoria"});
//-----------------------------------------------
StoreTrailerflix.hasOne(Descripcion,{foreignKey:"id"});
Descripcion.belongsTo(StoreTrailerflix,{foreignKey:"id",onDelete:"cascade"});
// //------------------------------
StoreTrailerflix.hasOne(Reparto,{foreignKey:"id"})
Reparto.belongsTo(StoreTrailerflix,{foreignKey:"id"});
// //-----------------------------
StoreTrailerflix.hasOne(Genero,{foreignKey:"id"})
Genero.belongsTo(StoreTrailerflix,{foreignKey:"id"});
//-----------------------------------------
StoreTrailerflix.hasOne(Trailer,{foreignKey:"id"})
Trailer.belongsTo(StoreTrailerflix,{foreignKey:"id"});


module.exports={
    Reparto,
    Actores,
    Genero,
    TipoGenero,
    TipoCategoria,
    Trailer,
    StoreTrailerflix,
    Descripcion,
}

