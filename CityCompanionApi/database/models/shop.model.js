const mongoose = require('mongoose')
const shopSchema =new mongoose.Schema({

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
const Shop = mongoose.model('Shop', shopSchema)
module.exports = Shop