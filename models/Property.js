const mongoose = require('mongoose');


const propertySchema = new mongoose.Schema({
    title : {
        required : true,
        type : String
    },
    description : {
        required : true,
        type: String
    },
    imageUrl : {
        required : true,
        type: String
    },
    price : {
        required : true,
        type: String
    },
    location : {
        required : true,
        type: String
    }
})

module.exports = mongoose.model('Property', propertySchema)