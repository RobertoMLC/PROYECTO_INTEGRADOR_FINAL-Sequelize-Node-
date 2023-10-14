const { Actores } = require('../config/association');

const listarActores = async (req, res) => {
    try {
        const actores = await Actores.findAll();
        res.json(actores);
    } catch (error) {
        console.error("Error al listar los Actores:", error);
        res.status(500).json({ error: "Error al listar los Actores" });
    }
};
const crearActor = async (req, res) => {
    const { nombreApellidoActor } = req.body;
    try {
        const actor = await Actores.create({
            actoresNombreApellido:nombreApellidoActor });
        res.status(201).json(actor);
    } catch (error) {
        console.error("Error al crear actor:", error);
        res.status(500).json({ error: "Error al crear actor" });
    }
};

const obtenerActor = async (req, res) => {
    const ActorId = req.params.id;
    try {
        const actor = await Actores.findByPk(ActorId);
        if (!actor) {
            return res.status(404).json({ error: "Actor/Actriz no encontrado" });
        }
        res.json(actor);
    } catch (error) {
        console.error("Error al obtener el Actor:", error);
        res.status(500).json({ error: "Error al obtener la categoría" });
    }
};


const actualizarActor = async (req, res) => {
    const ActorId = req.params.id;
    const { nombreApellidoActor } = req.body;
    try {
        const actores = await Actores.findByPk(ActorId);
        if (!actores) {
            return res.status(404).json({ error: "Actor/Actriz no encontrado" });
        }
        await actores.update({
            actoresNombreApellido:nombreApellidoActor })

        res.json(actores);
    } catch (error) {
        console.error("Error al actualizar Actor:", error);
        res.status(500).json({ error: "Error al actualizar Actor" });
    }
};
const eliminarActor = async (req, res) => {
    const actorId = req.params.id;
    try {
        const actor = await Actores.findByPk(actorId);
        if (!actor) {
            return res.status(404).json({ error: "Actor/Actriz no encontrado" });
        }
        await actor.destroy();
        res.json({ mensaje: "Categoría eliminada con éxito" });
    } catch (error) {
        console.error("Error al eliminar Actor:", error);
        res.status(500).json({ error: "Error al eliminar Actor/Actriz" });
    }
};
module.exports = { listarActores, crearActor, obtenerActor, actualizarActor,eliminarActor };
