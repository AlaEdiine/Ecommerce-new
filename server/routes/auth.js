const express = require("express");
const router = express.Router();
const { Login } = require("../authcontrollers/auth");


router.post('/Login', Login)

module.exports = router;