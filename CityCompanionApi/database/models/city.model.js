const mongoose = require('mongoose')
const citySchema =new mongoose.Schema({

    countryId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'country'
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

citySchema.virtual('citycitys', {
    ref:"city",
    localField:"_id",
    foreignField:"cityId"
})

