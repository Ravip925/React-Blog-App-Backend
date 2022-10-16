const express = require("express");

const serverData = require("../Controllers/Data");

const routerData = express.Router();

routerData.route("/home").get(serverData.apidatacontroller);

module.exports = routerData;
