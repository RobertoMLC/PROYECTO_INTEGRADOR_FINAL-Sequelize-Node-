const { StoreTrailerflix } = require('../config/association');
const { Actores } = require('../config/association');
const { Descripcion } = require('../config/association');
const { Genero } = require('../config/association');
const { TipoCategoria } = require('../config/association');
const { TipoGenero } = require('../config/association');
const { Trailer } = require('../config/association');
const { Reparto } = require('../config/association');
const {Op} = require('sequelize')

const listarStoreTrailerflix = async (req, res) => {
    try {
        const storeTralierflix = await StoreTrailerflix.findAll();
        res.json(storeTralierflix);
    } catch (error) {
        console.error("Error al listar las Store Tralierflix:", error);
        res.status(500).json({ error: "Error al listar las Store Tralierflix" });
    }
};
//[Op.like]: '%hat'
const obtenerStoreDescripcionTitulo = async (req,res) =>{
    const descripcionTitulo = req.params.titulo;
    try{
        const descripcionArray = await StoreTrailerflix.findAll({
        //    attributes: { exclude: ["TipoCategoriaId"]},
            include:[{
                model:Descripcion,
                where:{titulo:{[Op.like]:`${descripcionTitulo}%` }}}
                ,{
                model: TipoCategoria,
                as: "Categoria"//,through:{attributes:[TipoCategoria.id]}
            }]
        })
        if(descripcionArray.length > 0){
            res.json(descripcionArray)
        }else{
            res.status(404).json({mensaje:"No existen registros con ese titulo"})
        }
    }catch(err){
        console.log(err)
    }
}


const formattedIdTrailerflix = async (req,res) =>{
   const storeId = req.params.id
    try{
    const storeTralierflix = await StoreTrailerflix.findOne({
        where:{id:storeId},
        include:
                [
                    {
                        model: TipoCategoria,
                        as: "Categoria"//,through:{attributes:[TipoCategoria.id]}
                    }
                    ,
                    Descripcion,
                    Trailer,
                    {
                        model: Reparto,
                        attributes: { exclude: ["actor1", "actor2", "actor3", "actor4", "actor5", "actor6", "actor7"] },
                        //  through:{attributes:id},
                        //    through:{Elenco, },
                        include: [{
                            model: Actores,
                            as: "NombreActor1"
                        },
                        {
                            model: Actores,
                            as: "NombreActor2"
                        },
                        {
                            model: Actores,
                            as: "NombreActor3"
                        },
                        {
                            model: Actores,
                            as: "NombreActor4"
                        },
                        {
                            model: Actores,
                            as: "NombreActor5"
                        },
                        {
                            model: Actores,
                            as: "NombreActor6"
                        },
                        {
                            model: Actores,
                            as: "NombreActor7"
                        }
                        ]
                    }

                    ,
                    {
                        model: Genero,
                        attributes: { exclude: ["tipoGenero1", "tipoGenero2", "tipoGenero3"] },
                        include: [{
                            model: TipoGenero,
                            as: "Genero1",
                        }, {
                            model: TipoGenero,
                            as: "Genero2",
                        }, {
                            model: TipoGenero,
                            as: "Genero3",
                        }
                        ]
                    },
                ]
    })
    if(storeTralierflix){
        res.json(storeTralierflix)
      //  return storeTralierflix;
    }else{
        res.status(404).json("No existe Id especificado en Store")
    }

   } catch(err){


   }
}

const formattedListTrailerflix = async (req, res) => {
    try {
        const storeTralierflix = await StoreTrailerflix.findAll({
            //  attributes:{exclude:""},
            include://{ all: true, nested: true }
                [
                    {
                        model: TipoCategoria,
                        as: "Categoria"//,through:{attributes:[TipoCategoria.id]}
                    }
                    ,
                    Descripcion,
                    Trailer,
                    {
                        model: Reparto,
                        attributes: { exclude: ["actor1", "actor2", "actor3", "actor4", "actor5", "actor6", "actor7"] },
                        //  through:{attributes:id},
                        //    through:{Elenco, },
                        include: [{
                            model: Actores,
                            as: "NombreActor1"
                        },
                        {
                            model: Actores,
                            as: "NombreActor2"
                        },
                        {
                            model: Actores,
                            as: "NombreActor3"
                        },
                        {
                            model: Actores,
                            as: "NombreActor4"
                        },
                        {
                            model: Actores,
                            as: "NombreActor5"
                        },
                        {
                            model: Actores,
                            as: "NombreActor6"
                        },
                        {
                            model: Actores,
                            as: "NombreActor7"
                        }
                        ]
                    }

                    ,
                    {
                        model: Genero,
                        attributes: { exclude: ["tipoGenero1", "tipoGenero2", "tipoGenero3"] },
                        include: [{
                            model: TipoGenero,
                            as: "Genero1",
                        }, {
                            model: TipoGenero,
                            as: "Genero2",
                        }, {
                            model: TipoGenero,
                            as: "Genero3",
                        }
                        ]
                    },
                ]
        });
        res.json(storeTralierflix);
      //  return storeTralierflix;
    } catch (error) {
        console.error("Error al dar formato al Store", error)

    }
}


const crearStoreTrailerflix = async (req, res) => {
    const storeData = await req.body;
    try {
        const tipoCat = await TipoCategoria.findOne({
            where: { tipoCategoriaNombre: storeData.tipoCategoriaNombre }
        })
        const store = await StoreTrailerflix.create({
            TipoCategoriaId: tipoCat.id
        })
        const actor1 = await Actores.findOrCreate({
            where: { actoresNombreApellido: storeData.actor1 }
        });
        const actor2 = await Actores.findOrCreate({
            where: { actoresNombreApellido: storeData.actor2 }
        });
        const actor3 = await Actores.findOrCreate({
            where: { actoresNombreApellido: storeData.actor3 }
        });
        const actor4 = await Actores.findOrCreate({
            where: { actoresNombreApellido: storeData.actor4 }
        });
        const actor5 = await Actores.findOrCreate({
            where: { actoresNombreApellido: storeData.actor5 }
        });
        const actor6 = await Actores.findOrCreate({
            where: { actoresNombreApellido: storeData.actor6 }
        });
        const actor7 = await Actores.findOrCreate({
            where: { actoresNombreApellido: storeData.actor7 }
        });

        const rep = await Reparto.create({
            id: store.id,
            actor1: actor1.id,
            actor1: actor2.id,
            actor1: actor3.id,
            actor1: actor4.id,
            actor1: actor5.id,
            actor1: actor6.id,
            actor1: actor7.id
        });
        const descripcion = await Descripcion.create({
            id: store.id,
            titulo: storeData.titulo,
            resumen: storeData.resumen,
            poster: storeData.poster,
            temporadas: storeData.temporadas,
        })
        const trailer = await Trailer.create({
            id: store.id,
            trailerLinkOriginal: storeData.trailerLinkOriginal,
            trailerLinkAlternativo: storeData.trailerLinkAlternativo,
        })
        const gen1 = await TipoGenero.findOrCreate({
            where: { tipoGeneroNombre: storeData.tipoGen1 }
        });
        const gen2 = await TipoGenero.findOrCreate({
            where: { tipoGeneroNombre: storeData.tipoGen2 }
        });
        const gen3 = await TipoGenero.findOrCreate({
            where: { tipoGeneroNombre: storeData.tipoGen3 }
        });
        const genero = await Genero.create({
            id: store.id,
            tipoGenero1: gen1.id,
            tipoGenero2: gen2.id,
            tipoGenero3: gen3.id
        });
        res.status(201).json(rep);
    } catch (error) {
        console.error("Error al crear un nueva registro a store:", error);
        res.status(500).json({ error: "Error al crear un nueva registro a store" });
    }
};

const obtenerStoreTrailerflix = async (req, res) => {
    const storeTralierflixId = req.params.id;
    try {
        const storeTralierflix = await StoreTrailerflix.findByPk(storeTralierflixId);
        if (!storeTralierflix) {
            return res.status(404).json({ error: "Store Tralierflix no encontrado" });
        }
        res.json(storeTralierflix);
    } catch (error) {
        console.error("Error al obtener el Store:", error);
        res.status(500).json({ error: "Error al obtener Store Tralierflix" });
    }
};


const actualizarStoreTrailerflix = async (req, res) => {
    const storeTralierflixId = req.params.id;
    const TipoCategoriaId = req.body;
    console.log(TipoCategoriaId)
    try {
        const storeTralierflix = await StoreTrailerflix.findByPk(storeTralierflixId);
        if (!storeTralierflix) {
            return res.status(404).json({ error: "Store Tralierflix no encontrado" });
        }
        await StoreTrailerflix.update(TipoCategoriaId, {
            where: { id: storeTralierflixId }
        })

        res.json(storeTralierflix);
    } catch (error) {
        console.error("Error al actualizar storeTralierflix:", error);
        res.status(500).json({ error: "Error al actualizar storeTralierflix" });
    }
};
const eliminarStoreTrailerflix = async (req, res) => {
    const storeTralierflixId = req.params.id;
    try {
        const storeTralierflix = await StoreTrailerflix.findByPk(storeTralierflixId);
        if (!storeTralierflix) {
            return res.status(404).json({ error: "storeTralierflix no encontrado" });
        }
        await storeTralierflix.destroy();
        res.json({ mensaje: "storeTralierflix id eliminada con éxito" });
    } catch (error) {
        console.error("Error al eliminar storeTralierflix:", error);
        res.status(500).json({ error: "Error al eliminar storeTralierflix" });
    }
};
module.exports = {
    actualizarStoreTrailerflix, eliminarStoreTrailerflix, listarStoreTrailerflix,
    obtenerStoreTrailerflix, crearStoreTrailerflix, formattedListTrailerflix,formattedIdTrailerflix,
    obtenerStoreDescripcionTitulo
}
