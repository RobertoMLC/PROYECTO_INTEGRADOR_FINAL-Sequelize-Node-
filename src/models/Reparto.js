const Sequelize = require('sequelize');
const {db} = require("../db/dbconfig.js");

const Reparto = db.define("reparto",{

},{
    tableName: "reparto",
    timestamps: false,
  });

  module.exports=Reparto;
