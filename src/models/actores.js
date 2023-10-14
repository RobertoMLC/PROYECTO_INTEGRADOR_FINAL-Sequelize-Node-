const Sequelize = require('sequelize');
const {db} = require("../db/dbconfig.js");

const Actores = db.define("actores",{
    actoresNombreApellido:{
        type:Sequelize.STRING(60),
        allowNull:true,
    }
},{
    tableName: "actores",
    timestamps: false,
  });

module.exports= Actores;
