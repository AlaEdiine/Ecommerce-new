const mongoose = require("mongoose");

const UUSERSchema = new mongoose.Schema({

    googleId : String ,
    secret : String,
    email : String ,
    pic : String ,
    FirstName: {
        type: String,
        required: false,
    },

    LastName: {
        type: String,
        required: false,
    },

    Email: {
        type: String,
        required: false,
        unique: false
    },

    Password: {
        type: String,
        required: false
    },

    isAdmin: {
         type: Boolean,
         default : false
    },
    isAccountVerified: {
        type: Boolean,
        default : false
   },
    
    PrimaryKey :
    {
        type: String,
    },
    Photo :
    {
        type: String,
    },
    Mobile :
    {
        type: String,
    },
    Country :
    {
        type: String,
    },
    Address :
    {
        type: String,
    },
    City :
    {
        type: String,
    },
    ZIPcode :
    {
        type: String,
    }
     

});

module.exports.UUSER = mongoose.model('UUSER' , UUSERSchema)