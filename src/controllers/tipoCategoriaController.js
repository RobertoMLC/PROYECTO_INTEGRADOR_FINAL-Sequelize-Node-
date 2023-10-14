const { TipoCategoria, StoreTrailerflix, Descripcion, Reparto, Actores, Genero, TipoGenero, Trailer } = require('../config/association')

const listarTipoCategorias = async (req, res) => {
    try {
        const tipoCategoria = await TipoCategoria.findAll();
        res.json(tipoCategoria);
    } catch (error) {
        console.error("Error al listar tipoCategoria:", error);
        res.status(500).json({ error: "Error al listar Tipo Categoria" });
    }
};

const listarTipoCategoriasStore = async (req, res) => {
    const  categoria  = req.params.findCat;
    try {
        const findCategoria = await TipoCategoria.findOne({
            where:{tipoCategoriaNombre:categoria}
        });
        console.log(findCategoria)
        if(findCategoria){
            const findCategoriaStore = await StoreTrailerflix.findAll({
                where:{
                    TipoCategoriaId:findCategoria.id
                },
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
            if(findCategoriaStore.length>0){
                res.json(findCategoriaStore);
            }
        }
        else{
            res.json("Categoria en store no encontrado");
        }

    } catch (error) {
        console.error("Error al buscar Categoria en Store:", error);
        res.status(500).json({ error: "Error al buscar Categoria en Store" });
    }
};

const crearTipoCategorias = async (req, res) => {
    const { tipoCategoriaNombre } = req.body;
    try {
        const tipoCategorias = await TipoCategoria.create({ tipoCategoriaNombre });
        res.status(201).json(tipoCategorias);
    } catch (error) {
        console.error("Error al crear tipoCategoria:", error);
        res.status(500).json({ error: "Error al crear tipoCategoria" });
    }
};

const obtenerTipoCategorias = async (req, res) => {
    const TipoCategoriasId = req.params.id;
    try {
        const tipoCategorias = await Actores.findByPk(TipoCategoriasId);
        if (!tipoCategorias) {
            return res.status(404).json({ error: "Tipo de Categoria no encontrado" });
        }
        res.json(tipoCategorias);
    } catch (error) {
        console.error("Error al obtener tipoCategoria:", error);
        res.status(500).json({ error: "Error al obtener la categoría" });
    }
};


const actualizarTipoCategoria = async (req, res) => {
    const TipoCategoriasId = req.params.id;
    const { tipoCategoriaNombre } = req.body;
    try {
        const tipoCategoria = await TipoCategoria.findByPk(TipoCategoriasId);
        if (!tipoCategoria) {
            return res.status(404).json({ error: "Tipo Categoria encontrado" });
        }

        await tipoCategoria.update({ tipoCategoriaNombre:tipoCategoriaNombre
        })

        res.json(tipoCategoria);
    } catch (error) {
        console.error("Error al actualizar tipoCategoria:", error);
        res.status(500).json({ error: "Error al actualizar tipoCategoria" });
    }
};
const eliminarTipoCategoria = async (req, res) => {
    const tipoCategoriaId = req.params.id;
    try {
        const tipoCategoria = await Actores.findByPk(tipoCategoriaId);
        if (!tipoCategoria) {
            return res.status(404).json({ error: "Tipo Categoria no encontrado" });
        }
        await tipoCategoria.destroy();
        res.json({ mensaje: "Categoría eliminada con éxito" });
    } catch (error) {
        console.error("Error al eliminar Actor:", error);
        res.status(500).json({ error: "Error al eliminar Actor/Actriz" });
    }
};

module.exports = {listarTipoCategoriasStore, actualizarTipoCategoria, eliminarTipoCategoria, crearTipoCategorias, listarTipoCategorias, obtenerTipoCategorias }
