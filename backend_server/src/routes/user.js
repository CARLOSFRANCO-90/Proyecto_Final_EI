const express = require ("express");
const UserController = require("../controllers/User");
/*tengo duas si es com masyuscula */
const api = express.Router();

api.post("/signup", UserController.signUp);

module.exports = api;