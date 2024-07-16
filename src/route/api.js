const express = require("express");
const sumonController = require("../controller/sumonController");

const route = express.Router();

route.get("/", sumonController.home);

route.post("/upload", sumonController.upload);

module.exports = route;
