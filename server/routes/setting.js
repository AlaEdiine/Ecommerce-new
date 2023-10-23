const express = require("express");
const router = express.Router();
const { CHANGE_PASSWORD } = require("../authcontrollers/setting");
const { verifyTokenAdmin } = require("../utils/verifyToken");


router.post('/CHANGE_PASSWORD'  , verifyTokenAdmin , CHANGE_PASSWORD)

module.exports = router;