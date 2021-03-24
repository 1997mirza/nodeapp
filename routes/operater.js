const express = require("express");
const { route } = require("./admin");
const router = express.Router();

router.get("/",require("../controllers/operater/operaterController"))

router.post("/newTermin",require("../controllers/operater/newTerminController"))

module.exports = router