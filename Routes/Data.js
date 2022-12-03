const routerData = require("express").Router();

const serverData = require("../Controllers/Data"); //importing data


routerData.route("/home").get(serverData.apidatacontroller); //created home route

module.exports = routerData;
