const Sequelize = require('sequelize');
const {db} = require("../db/dbconfig.js");

const TipoCategoria = db.define("tipoCategoria",{
    // tipoCategoriaId:{
    //     type:Sequelize.INTEGER,
    //     primaryKey:true,
    //     autoIncrement:true,
    //     allowNull:false
    // },
    tipoCategoriaNombre:{
        type:Sequelize.STRING(40),
        allowNull:false
    }
},{
    tableName: "tipoCategoria",
    timestamps: false,
  });
module.exports= TipoCategoria;
