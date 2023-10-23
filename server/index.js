const express = require("express");
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY)
const multer = require("multer");
const parser = require("body-parser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser"); // cookies
const jwt = require("jsonwebtoken");
require("./db");
const cors = require("cors");
const { errorHandler, notFound } = require("./Middlewares/error");
require("dotenv").config();
var app = express();


// Cors Policy
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

// var allowedOrigins = [
//   "http://someorigin.com",
//   "http://localhost:3001",
//   "http://localhost:1234",
//   "http://localhost:3000",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin
//       // (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         var msg =
//           "The CORS policy for this site does not " +
//           "allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },

//     exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],

//     credentials: true,
//   })
// );

// pour toutes les cors
// app.use(cors())

app.use(cookieParser());
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());



// ROUTES
app.use("/auth", require("./routes/auth"));
app.use('/USER' , require('./routes/_user'))
app.use('/SETTING' , require('./routes/setting'))
app.use('/ORDER' , require('./routes/order'))
app.use('/api' , require('./routes/api'))
app.use('/logout' , require('./routes/logout'))
app.use('/images' , express.static("uploads"))

// Error Handler Middleware
// app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
