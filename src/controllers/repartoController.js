const { where } = require('sequelize');
const { Reparto } = require('../config/association');

const listarReparto = async (req, res) => {
    try {
        const reparto = await Reparto.findAll();
        res.json(reparto);
    } catch (error) {
        console.error("Error al listar los repartos:", error);
        res.status(500).json({ error: "Error al listar los repartos" });
    }
};

const obtenerReparto = async (req, res) => {
    const repartoId = req.params.id;
    try {
        const reparto = await Reparto.findByPk(repartoId);
        if (!reparto) {
            return res.status(404).json({ error: "Pel/Serie Reparto no encontrado" });
        }
        res.json(reparto);
    } catch (error) {
        console.error("Error al obtener el Pel/Serie reparto:", error);
        res.status(500).json({ error: "Error al obtener el Pel/Serie reparto" });
    }
};

const actualizarReparto = async (req, res) => {
    const repartoId = req.params.id;
    const { actor1, actor2, actor3, actor4, actor5, actor6, actor7 } = req.body;
    try {
        const reparto = await Reparto.findByPk(repartoId);
        if (!reparto) {
            return res.status(404).json({ error: "Reparto no encontrado" });
        }
        await reparto.update({ actor1:actor1, actor2:actor2, actor3:actor3, actor4:actor4, actor5:actor5, actor6:actor6, actor7:actor7 },
        );

        res.json(reparto);
    } catch (error) {
        console.error("Error al actualizar  Pel/Serie reparto:", error);
        res.status(500).json({ error: "Error al actualizar Pel/Serie reparto" });
    }
};
const eliminarReparto = async (req, res) => {
    const repartoId = req.params.id;
    try {
        const reparto = await Reparto.findByPk(repartoId);
        if (!reparto) {
            return res.status(404).json({ error: "Pel/Serie reparto no encontrado" });
        }
        await reparto.destroy();
        res.json({ mensaje: "Pel/Serie reparto eliminado con éxito" });
    } catch (error) {
        console.error("Error al eliminar Pel/Serie Genero:", error);
        res.status(500).json({ error: "Error al eliminar Pel/Serie Genero" });
    }
};
module.exports = { listarReparto, obtenerReparto, actualizarReparto, eliminarReparto };
