const express = require("express");
const router = express.Router();
const { payment } = require("../authcontrollers/api");

// payment
router.post('/sessionCheckout', payment)

module.exports = router