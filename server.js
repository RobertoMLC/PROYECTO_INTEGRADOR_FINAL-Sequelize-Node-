
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
require('./src/config/association.js');
const Store = require('./src/models/StoreTrailerflix.js');
const figlet = require('figlet');
const dataDefault = require('./src/db/defaultStoredTraileflix.js');
const { isEmpty } = require("./src/helpers/helperArray.js")
const { db } = require('./src/db/dbconfig')
app.use(express.json());

try {
  db.sync().then((res) => console.log("Sincronizado correctamente")).catch((err) => console.log("No se conecto. Revisa el servidor de la DB")) //Sincronizar tablas y cargar datos
    .then(async () => await isEmpty(Store)).then(async (res) => {
      if (res) {
        dataDefault.insertarTipoCategoria()
          .then((res) => dataDefault.insertarActores())
          .then((res) => dataDefault.insertarTipoGenero())
          .then((res) => dataDefault.insertarCategoriaDescripcionTrailerRepartoGenero())
          .then((res) => console.log("datos cargados"))
      }
    });
}
catch (err) {
  console.log(err, "Servidor Desconectado")
}

const ActoresRouter = require("./src/routes/ActoresRouter.js");
const DescripcionRouter = require("./src/routes/DescripcionRouter.js");
const GeneroRouter = require("./src/routes/GeneroRouter.js");
const RepartoRouter = require("./src/routes/RepartoRouter.js");
const StoreTrailerflixRouter = require("./src/routes/StoreTrailerflixRouter.js");
const TipoCategoriaRouter = require("./src/routes/TipoCategoriaRouter.js");
const TipoGeneroRouter = require("./src/routes/TipoGeneroRouter.js");
const TrailerRouter = require("./src/routes/TrailerRouter.js");

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a Trailerflix" })
})
app.use("/api", ActoresRouter);
app.use("/api", DescripcionRouter);
app.use("/api", GeneroRouter);
app.use("/api", RepartoRouter);
app.use("/api", StoreTrailerflixRouter);
app.use("/api", TipoCategoriaRouter);
app.use("/api", TipoGeneroRouter);
app.use("/api", TrailerRouter);

app.get("*", (req, res) => {
  res.json({ message: "La ruta no existe" })
})


app.listen(PORT, () => {
  console.log(`Eschando del http://localhost:${PORT}`);
  figlet("Trailerflix", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
})
