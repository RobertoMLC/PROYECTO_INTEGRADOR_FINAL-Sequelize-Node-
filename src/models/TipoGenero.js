const Sequelize = require('sequelize');
const {db} = require("../db/dbconfig.js");

const TipoGenero = db.define("tipoGenero",{
    // tipoGeneroId:{
    //     type:Sequelize.INTEGER,
    //     primaryKey:true,
    //     autoIncrement:true,
    //     allowNull:false
    // },
    tipoGeneroNombre:{
        type:Sequelize.STRING(40),
        allowNull:true
    }
},{
    tableName: "tipoGenero",
    timestamps: false,
  })
module.exports= TipoGenero;
