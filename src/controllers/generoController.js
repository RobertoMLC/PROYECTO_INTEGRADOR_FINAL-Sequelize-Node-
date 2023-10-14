const { Genero, TipoGenero, Descripcion, TipoCategoria } = require('../config/association');
const {StoreTrailerflix} = require("../config/association")
const {Op} = require('sequelize');

const listarGenero = async (req, res) => {
    try {
        const genero = await Genero.findAll();
        res.json(genero);
    } catch (error) {
        console.error("Error al listar los generos:", error);
        res.status(500).json({ error: "Error al listar los generos" });
    }
};
const listarGeneroStore = async (req, res) => {
    const  tipoGenero  = req.params.tipoGen;

    try {
        const findTipoGen = await TipoGenero.findOne({
            where:{tipoGeneroNombre:tipoGenero}
        });
        if(findTipoGen){
            const findGeneroStore = await Genero.findAll({
                where:{
                    [Op.or]: [
                        { tipoGenero1: findTipoGen.id },
                        { tipoGenero2: findTipoGen.id },
                        { tipoGenero3: findTipoGen.id }
                      ]
                },
                attributes:{exclude:["tipoGenero1","tipoGenero2","tipoGenero3"]},
                include:[
                    {
                    model:StoreTrailerflix,
                    include:[Descripcion]
                }]
            })
            if(findGeneroStore.length>0){
                res.json(findGeneroStore);
            }
        }
        else{
            res.json("Genero en store no encontrado");
        }

    } catch (error) {
        console.error("Error al buscar genero por nombre:", error);
        res.status(500).json({ error: "Error al buscar genero por nombre" });
    }
};

const obtenerGenero = async (req, res) => {
    const generoId = req.params.id;
    try {
        const genero = await Genero.findByPk(generoId);
        if (!genero) {
            return res.status(404).json({ error: "Pel/Serie Genero no encontrado" });
        }
        res.json(genero);
    } catch (error) {
        console.error("Error al obtener el Pel/Serie Genero:", error);
        res.status(500).json({ error: "Error al obtener el Pel/Serie Genero" });
    }
};


const actualizarGenero = async (req, res) => {
    const generoId = req.params.id;
    const { tipoGenero1,tipoGenero2,tipoGenero3 } = req.body;
    try {
        const genero = await Genero.findByPk(generoId);
        if (!genero) {
            return res.status(404).json({ error: "Genero no encontrado" });
        }
        await genero.update({tipoGenero1:tipoGenero1,tipoGenero2:tipoGenero2,tipoGenero3:tipoGenero3})

        res.json(genero);
    } catch (error) {
        console.error("Error al actualizar  Pel/Serie Genero:", error);
        res.status(500).json({ error: "Error al actualizar Pel/Serie Genero" });
    }
};

const eliminarGenero = async (req, res) => {
    const genero_id = req.params.id;
    try {
        const genero = await Genero.findByPk(genero_id);
        if (!genero) {
            return res.status(404).json({ error: "Pel/Serie Genero no encontrado" });
        }
        await genero.destroy();
        res.json({ mensaje: "Pel/Serie Genero eliminada con éxito" });
    } catch (error) {
        console.error("Error al eliminar Pel/Serie Genero:", error);
        res.status(500).json({ error: "Error al eliminar Pel/Serie Genero" });
    }
};
module.exports = {listarGeneroStore, listarGenero, obtenerGenero, actualizarGenero,eliminarGenero };
