const mongoose = require("mongoose");

const UUSERSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true,
    },

    LastName: {
        type: String,
        required: true,
    },

    Email: {
        type: String,
        required: true,
        unique: true
    },

    Password: {
        type: String,
        required: true
    },

    isAdmin: {
         type: Boolean,
         default : true
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