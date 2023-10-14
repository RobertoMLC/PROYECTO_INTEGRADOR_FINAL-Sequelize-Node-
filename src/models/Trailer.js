const Sequelize = require('sequelize');
const {db} = require("../db/dbconfig.js");

const Trailer = db.define("trailer",{
    // trailerId:{
    //     type:Sequelize.INTEGER,
    //     primaryKey:true,
    //     autoIncrement:true,
    //     allowNull:false
    // },
    trailerLinkOriginal:{
        type:Sequelize.STRING(100),
        allowNull:false
    },
    trailerLinkAlternativo:{
        type:Sequelize.STRING(100),
        allowNull:false
    }
},{
    tableName: "trailer",
    timestamps: false,
  });

module.exports= Trailer;
