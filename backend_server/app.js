const express = require("express");
const bodyParser = require ("body-parser");
const cors = this.require ("cors");

const app = express();
const {API_VERSION }=  require("./config");

const userRouter = require("./src/routes/user");

app.use(bodyParser.urlencoded ({extended: false }));
app.use(bodyParser.json());
/*Eviar bloques del cors */
app.use(cors());

/*Creacion de los edpoint  del proyecto */
app.use(`/api/${API_VERSION}`, userRouter);  

/*Configuración  de los header HTTP*/
module.exports = app;