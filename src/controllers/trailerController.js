const { Trailer } = require('../config/association');

const listarTrailer = async (req, res) => {
    try {
        const trailer = await Trailer.findAll();
        res.json(trailer);
    } catch (error) {
        console.error("Error al listar trailers :", error);
        res.status(500).json({ error: "Error al listar las trailers" });
    }
};

const obtenerTrailer = async (req, res) => {
    const trailerId = req.params.id;
    try {
        const trailer = await Trailer.findByPk(trailerId);
        if (!trailer) {
            return res.status(404).json({ error: "Trailer no encontrado" });
        }
        res.json(trailer);
    } catch (error) {
        console.error("Error al obtener el Trailer:", error);
        res.status(500).json({ error: "Error al obtener trailer" });
    }
};

const actualizarTrailer = async (req, res) => {
    const trailerId = req.params.id;
    const { trailerLinkOriginal, trailerLinkAlternativo} = req.body;
    try {
        const trailer = await Trailer.findByPk(trailerId);
        if (!trailer) {
            return res.status(404).json({ error: "Trailer Id no encontrado" });
        }
        await trailer.update({trailerLinkOriginal:trailerLinkOriginal, trailerLinkAlternativo:trailerLinkAlternativo}
        )
        res.json(trailer);
    } catch (error) {
        console.error("Error al actualizar trailer:", error);
        res.status(500).json({ error: "Error al actualizar trailer" });
    }
};
const eliminarTrailer = async (req, res) => {
    const trailerId = req.params.id;
    try {
        const trailer = await Trailer.findByPk(trailerId);
        if (!trailer) {
            return res.status(404).json({ error: "TrailerId no encontrado" });
        }
        await Trailer.destroy();
        res.json({ mensaje: "Trailer eliminado con éxito" });
    } catch (error) {
        console.error("Error al eliminar Trailer:", error);
        res.status(500).json({ error: "Error al eliminar Trailer" });
    }
};
module.exports={actualizarTrailer,eliminarTrailer,listarTrailer,obtenerTrailer}
