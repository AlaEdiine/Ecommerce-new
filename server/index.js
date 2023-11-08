const express = require("express");
const mongoose = require("mongoose");
const xss = require("xss-clean")
const rateLimiting = require("express-rate-limit")
const helmet = require("helmet")
const hpp = require("hpp")
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY)
const multer = require("multer");
const parser = require("body-parser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser"); // cookies
const jwt = require("jsonwebtoken");
require("./db");
const cors = require("cors");
const { errorHandler, notFound } = require("./Middlewares/error");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("dotenv").config();
var app = express();
const PORT = process.env.PORT || 3001;

// Cors Policy
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true, 
  optionSuccessStatus:200
}

// cookieSession
app.use(cookieSession({
  name:"session",
  keys: ["lama"],
  maxAge: 24 * 60 * 60 * 100,
}))


// Middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(xss()); // prevent XSS (cross site scripting) attacks
app.use(helmet()); // Security headers 
app.use(hpp()); // prevent HTTP param pollution
app.use(rateLimiting({
  windowMs : 10 * 60 * 1000 ,// 10 Minutes
  max: 200 // 200 request send in 10 minutes
})) // reate limiting request



// ROUTES
app.use("/AUTH", require("./routes/auth"));
app.use("/auth", require("./routes/authAccount"));
app.use('/USER' , require('./routes/_user'))
app.use('/SETTING' , require('./routes/setting'))
app.use('/ORDER' , require('./routes/order'))
app.use('/api' , require('./routes/api'))
app.use('/logout' , require('./routes/logout'))
app.use('/images' , express.static("uploads"))
app.use(passport.initialize())
app.use(passport.session());
require("./authcontrollers/authAccount/google-auth")(passport)

// Error Handler Middleware
// app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
