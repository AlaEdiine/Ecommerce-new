const express = require("express");
const router = express.Router();
require("dotenv").config();
const { createError } = require("../Service/Error");
const { AJOUTER_USER , UPDATE_USER ,  DELETE_USER , GET_USER , GET_USER_BY_ID , GET_ALL_USER } = require("../authcontrollers/_user");
const { verifyToken, verifyTokenAdmin } = require("../utils/verifyToken");
const PhotoUpload = require("../Middlewares/PhotoUpload");

// ADD USER
router.post('/AJOUTER', AJOUTER_USER)

// UPDATE USER
router.put('/UPDATE/:id' , PhotoUpload.single("image"), UPDATE_USER)

// DELETE USER
router.delete('/DELETE/:id', DELETE_USER)

// GET USER
router.get('/GET', verifyTokenAdmin , GET_USER)

// GET USER
router.get('/GET/:id', verifyToken , GET_USER_BY_ID)

// GET ALL USER
router.get('/GET_ALL/', GET_ALL_USER)

module.exports = router