const { Reparto, Actores, Genero, TipoGenero, TipoCategoria, Trailer, StoreTrailerflix, Descripcion } = require("../config/association");
const trailerflix = require('../helpers/trailerflixNOSQL/data');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


let reformattedArray = trailerflix.map(({reparto,genero,resumen,trailer,titulo,poster,temporadas,categoria}) => ({
    Poster:poster,
    Titulo:titulo,
    Trailer: trailer,
    Resumen: resumen,
    Genero: genero.split(', '), //me di cuenta tarde de esto
    Actores: reparto.split(','),
    Temporadas:  parseInt(temporadas),
    Categoria: categoria,
})); // Hago el array para empezar a trabajarlo el array de reparto

async function insertarTipoCategoria() {
    const res =
    await TipoCategoria.bulkCreate([{
        tipoCategoriaNombre: "Serie"
    }, {
        tipoCategoriaNombre: "Pelicula"
    }]);
    return res;
}

async function insertarTipoGenero() { //  hise a los create manual porque pense q asi era mas facil pero tendria q haber hecho un funcion
    const res =
    await TipoGenero.bulkCreate([{
        tipoGeneroNombre: "Horror" //Drama Ficción Ciencia Ficción
    }, {
        tipoGeneroNombre: "Misterio" //Drama Sucesos  Misterio  Fantasía N/A Ficción
    }, {
        tipoGeneroNombre: "Drama" //Drama Sucesos  Misterio  Fantasía N/A Ficción
    }, {
        tipoGeneroNombre: "Ciencia Ficción" // Hechos verídicos Ciencia Ficción Hechos verídicos
    }, {
        tipoGeneroNombre: "Hechos verídicos"
    }, {
        tipoGeneroNombre: "Ficción"
    }, {
        tipoGeneroNombre: "Sucesos"
    }, {
        tipoGeneroNombre: "Fantasía"
    }, {
        tipoGeneroNombre: "Crimen"
    }, {
        tipoGeneroNombre: "Aventura"
    }, {
        tipoGeneroNombre: "Comedia"
    }, {
        tipoGeneroNombre: "Familia"
    }, {
        tipoGeneroNombre: "Western"
    }, {
        tipoGeneroNombre: "Tecnología"
    }, {
        tipoGeneroNombre: "Suspenso"
    }, {
        tipoGeneroNombre: "Terror"
    }, {
        tipoGeneroNombre: "Historia"
    }, {
        tipoGeneroNombre: "Intriga"
    }, {
        tipoGeneroNombre: "Acción"
    }, {
        tipoGeneroNombre: "N/A"
    }]);
    return res;
}


async function insertarActores() {
    const res =
    reformattedArray.forEach(
        (i) => {
            i.Actores.forEach(async (actor) => {
                await Actores.findOrCreate({ //inserta los acotores si los encuentra
                    where: { actoresNombreApellido: actor.trimStart() }
                });
            });
        });
        return res
}

async function insertarCategoriaDescripcionTrailerRepartoGenero() {

    try {
        const response = [
        reformattedArray.forEach(async element => {
            const getCategoria = await TipoCategoria.findOne(
                { where: { tipoCategoriaNombre: element.Categoria } });
              //  console.log(getCategoria)
            //return
            const store = await StoreTrailerflix.create({
           //         id: tra.id,  //todos estan en lo mismo
                    TipoCategoriaId: getCategoria.id //insertar tipo de
                });

            // let resultadoReparto = async () => await Promise.all([
            const actor1 = await Actores.findOne(
                    {
                        where: {
                            actoresNombreApellido: { [Op.like]: element.Actores[0] }
                        }
                    })
            const actor2 = await Actores.findOne(
                    {
                        where: {
                            actoresNombreApellido: { [Op.like]: element.Actores[1] }
                        }
                    }
                )
            const actor3 = await Actores.findOne(
                    {
                        where: {
                            actoresNombreApellido: { [Op.like]: element.Actores[2] }
                        }
                    }
                )
            const actor4 = await Actores.findOne(
                    {
                        where: {
                            actoresNombreApellido: { [Op.like]: element.Actores[3] }
                        }
                    }
                )
            const actor5 = await Actores.findOne(
                    {
                        where: {
                            actoresNombreApellido: { [Op.like]: element.Actores[4] }
                        }
                    }
                )

            const actor6 = await Actores.findOne(
                    {
                        where: {
                            actoresNombreApellido: { [Op.like]: element.Actores[5] }
                        }
                    }
                )
            const actor7 = await Actores.findOne(
                    {
                        where: {
                            actoresNombreApellido: { [Op.like]: element.Actores[6] }
                        }
                    }
                )

            const rep =  await Reparto.create({
                    id:store.id,
                    actor1: await actor1.id,
                    actor2: await actor2.id, //  getActor1.id : null,
                    actor3: await actor3.id , //? getActor3.id : null,
                    actor4: await actor4.id , //? getActor4.id : null,//,
                    actor5: await actor5.id ,// ? getActor5.id :null,
                    actor6: await actor6.id ,//? getActor6.id :null,
                    actor7: await actor7.id ,// ? getActor7.id :null
                     //? getActor2.id : null,
                })
            // });

            const des = await Descripcion.create({
                id:store.id,
                titulo: element.Titulo,
                resumen: element.Resumen,
                poster: element.Poster,
                temporadas: element.Temporadas
            });
            const tra = await Trailer.create({
                id:store.id,
                trailerLinkOriginal: element.Trailer || "N/A",
                trailerLinkAlternativo: "N/A"
            });
            // let resultadosGenero = async () => await Promise.all([
              const tipoGenero1 = await  TipoGenero.findOne(
                    {
                        where: {
                            tipoGeneroNombre: element.Genero[0]
                        }
                    })
                const tipoGenero2 = await  TipoGenero.findOne(
                    {
                        where: {
                            tipoGeneroNombre: element.Genero[1]
                        }
                    }
                );
                const tipoGenero3 = await  TipoGenero.findOne(
                    {
                        where: {
                            tipoGeneroNombre: element.Genero[2]
                        }
                    }
                );

            const genero = await Genero.create({
                    id:store.id,
                    tipoGenero1: await tipoGenero1.id,
                    tipoGenero2: await tipoGenero2.id,
                    tipoGenero3: await tipoGenero3.id
                })

        })];
        return response;
    } catch (err) {
        console.log(err);
        console.log("Error al cargar los datos por defecto");
    }

}

module.exports = {
    insertarCategoriaDescripcionTrailerRepartoGenero,
    insertarActores,
    insertarTipoGenero ,insertarTipoCategoria,
}
