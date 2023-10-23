const mongoose = require("mongoose");

const ORDERSchema = new mongoose.Schema({

    PrimaryKey: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    },

    Data: {
        type: Array,
        required: true,
    },

});

module.exports.ORDER = mongoose.model('ORDER' , ORDERSchema)