const express = require("express");
const route = express.Router();
const jwt = require("jsonwebtoken");
const tokenmiddlware = require("../middlewares/checkRolesMiddleWare");
const userController = require("../controllers/userController");

route.get("/", tokenmiddlware("manager"), (req, res) => {});
route.post("/signin", userController.registration);
route.post("/login", userController.login);

module.exports = route;
