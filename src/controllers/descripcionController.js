const { Descripcion } = require('../config/association');

const listarDescripcion = async (req, res) => {
    try {
        const descripcion = await Descripcion.findAll();
        res.json(descripcion);
    } catch (error) {
        console.error("Error al listar las descripciones:", error);
        res.status(500).json({ error: "Error al listar las descripciones" });
    }
};

const obtenerDescripcion = async (req, res) => {
    const descripcionId = req.params.id;
    try {
        const descripcion = await Descripcion.findByPk(descripcionId);
        if (!descripcion) {
            return res.status(404).json({ error: "Descripcion no encontrado" });
        }
        res.json(descripcion);
    } catch (error) {
        console.error("Error al obtener el Actor:", error);
        res.status(500).json({ error: "Error al obtener la categoría" });
    }
};


const actualizarDescripcion = async (req, res) => {
    const descripcionId = req.params.id;
    const { titulo,poster,resumen,temporadas } = req.body;
    try {
        const descripcion = await Descripcion.findByPk(descripcionId);
        if (!descripcion) {
            return res.status(404).json({ error: "Descripcion no encontrado" });
        }

        await descripcion.update({titulo:titulo,poster:poster,resumen:resumen,temporadas:temporadas})

        res.json(descripcion);
    } catch (error) {
        console.error("Error al actualizar descripcion:", error);
        res.status(500).json({ error: "Error al actualizar descripcion" });
    }
};
const eliminarDescripcion = async (req, res) => {
    const descripcionId = req.params.id;
    try {
        const descripcion = await Descripcion.findByPk(descripcionId);
        if (!descripcion) {
            return res.status(404).json({ error: "DescripcionId no encontrado" });
        }
        await Descripcion.destroy();
        res.json({ mensaje: "Descripcion eliminada con éxito" });
    } catch (error) {
        console.error("Error al eliminar Descripcion:", error);
        res.status(500).json({ error: "Error al eliminar Descripcion" });
    }
};
module.exports={actualizarDescripcion,eliminarDescripcion,listarDescripcion,obtenerDescripcion}
