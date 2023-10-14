const Sequelize = require('sequelize');
const {db} = require("../db/dbconfig.js");


const Genero = db.define("genero",{
},{
    tableName: "genero",
    timestamps: false,
  });



module.exports= Genero;
