const Sequelize = require('sequelize');
const {db} = require("../db/dbconfig.js");

const Descripcion = db.define("descripcion",{
    titulo:{
        type:Sequelize.STRING(100),
        allowNull:false
    },
    resumen:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    poster:{
        type:Sequelize.STRING(100),
        allowNull:false
    },
    temporadas:{
        type:Sequelize.INTEGER,
        allowNull:true,
        defaultValue:0
    }

},{
    tableName: "descripcion",
    timestamps: false,
  });

  module.exports=Descripcion
