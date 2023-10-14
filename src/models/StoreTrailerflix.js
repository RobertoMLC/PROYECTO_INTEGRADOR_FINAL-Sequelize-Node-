const Sequelize = require('sequelize');
const {db} = require("../db/dbconfig.js");

const StoreTrailerflix = db.define("storeTrailerflix",{
    // storeTrailerflixId:{
    //     type:Sequelize.INTEGER,
    //     primaryKey:true,
    //     autoIncrement:true,
    //     allowNull:false
    // },
    // descripcionId:{
    //     type:Sequelize.INTEGER,
    //     allowNull:false
    // },
    // repartoId:{
    //     type:Sequelize.STRING(40),
    //     allowNull:false
    // },
    // tipoCategoriaId:{
    //     type:Sequelize.INTEGER,
    //     allowNull:false
    // },
    // trailerId:{
    //     type:Sequelize.INTEGER,
    //     allowNull:false
    // },
    // generoId:{
    //     type:Sequelize.INTEGER,
    //     allowNull:false
    // },
},{tableName:"storeTrailerflix",timestamps:false});

module.exports = StoreTrailerflix;
