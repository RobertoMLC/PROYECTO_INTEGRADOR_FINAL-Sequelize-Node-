// Como es una tabla pivote solo se puede borrar por Id y se borra todo lo relacionado.
const { TipoGenero } = require('../config/association')

const listarTipoGenero = async (req, res) => {
    try {
        const tipoGenero = await TipoGenero.findAll();
        res.json(tipoGenero);
    } catch (error) {
        console.error("Error al listar tipoGenero:", error);
        res.status(500).json({ error: "Error al listar tipo Genero" });
    }
};
const crearTipoGenero = async (req, res) => {
    const  tipoGeneroData  = req.body;
    console.log(tipoGeneroData);
    try {
        const tipoGenero = await TipoGenero.create({
            tipoGeneroNombre:tipoGeneroData.tipoGeneroNombre
        });
        res.status(201).json(tipoGenero);
    } catch (error) {
        console.error("Error al crear tipoGenero:", error);
        res.status(500).json({ error: "Error al crear tipoGenero" });
    }
};

const obtenerTipoGenero = async (req, res) => {
    const tipoGeneroId = req.params.id;
    try {
        const tipoGenero = await Actores.findByPk(tipoGeneroId);
        if (!tipoGenero) {
            return res.status(404).json({ error: "Tipo de Genero no encontrado" });
        }
        res.json(tipoGenero);
    } catch (error) {
        console.error("Error al obtener tipoGenero:", error);
        res.status(500).json({ error: "Error al obtener el genero" });
    }
};


const actualizarTipoGenero = async (req, res) => {
    const TipoGeneroId = req.params.id;
    const { tipoGeneroNombre } = req.body;
    try {
        const tipoGenero = await TipoGenero.findByPk(TipoGeneroId);
        if (!tipoGenero) {
            return res.status(404).json({ error: "Tipo Genero no encontrado" });
        }

        await tipoGenero.update({tipoGeneroNombre:tipoGeneroNombre})

        res.json(tipoGenero);
    } catch (error) {
        console.error("Error al actualizar tipo Genero:", error);
        res.status(500).json({ error: "Error al actualizar tipo Genero" });
    }
};
const eliminarTipoGenero = async (req, res) => {
    const tipoGeneroId = req.params.id;
    try {
        const tipoGenero = await Actores.findByPk(tipoGeneroId);
        if (!tipoGenero) {
            return res.status(404).json({ error: "Tipo Genero no encontrado" });
        }
        await tipoGenero.destroy();
        res.json({ mensaje: "Genero eliminada con éxito" });
    } catch (error) {
        console.error("Error al eliminar Genero:", error);
        res.status(500).json({ error: "Error al eliminar Genero" });
    }
};

module.exports = { actualizarTipoGenero, eliminarTipoGenero, crearTipoGenero, listarTipoGenero, obtenerTipoGenero,crearTipoGenero }



