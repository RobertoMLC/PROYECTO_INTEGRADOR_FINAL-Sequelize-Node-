const dotenv = require("dotenv");
dotenv.config();
const {Sequelize} = require("sequelize");
const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host:"localhost",
    dialect:"mysql",
    port:3306
});

// async function closeConnection(){
//     try {
//         await sequelize.close()
//         console.log("Desconectado exitosamente")
//     } catch (error) {
//         console.error(error);
//     }
// }
module.exports= {db};
// async function authenticate(){
//     try {
//         await sequelize.atentificarse();
//         console.log("Conectado 😎")
//     } catch (error) {
//         console.error(error);
//     }
// };


//module.exports = {authenticate, closeConnection};
