const mongoose = require('mongoose')
const cafeSchema =new mongoose.Schema({

    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'City'
    },
        name:{
        type:String,
        trim:true,
        required:true,
        minlength:2,
        maxlength:20
    },
    image:{
        type:String,
        trim:true,
    }


})

const Cafe = mongoose.model('Cafe', cafeSchema)
module.exports = Cafe