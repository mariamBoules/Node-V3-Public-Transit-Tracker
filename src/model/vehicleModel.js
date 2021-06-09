const mongoose = require('mongoose')
const stations = require('./stationsModel')


const vehichles = new mongoose.Schema({
    plateNo: {
        type: String,
        required: true,
        unique: true,


    },
    type: {
        type: String,
        required: true,
        trim: true,

    },
    status: {
        type: Boolean,
        require: true,
    },
    lastStation:
    {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'stations'
    },
    path:
    {
        type: Array,
        required: true
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    fare :{
        type: Number,
        required:true,
        trim: true
    }

})
const vehichle = mongoose.model('vehichles', vehichles)
module.exports = vehichle