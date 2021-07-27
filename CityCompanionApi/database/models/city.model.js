const mongoose = require('mongoose')
const citySchema =new mongoose.Schema({

    countryId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Country'
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

citySchema.virtual('cityReviews', {
    ref:"Review",
    localField:"_id",
    foreignField:"cityId"
})


//Category
citySchema.virtual('cityPlaces', {
    ref:"Category",
    localField:"_id",
    foreignField:"cityId"
})

const City = mongoose.model('City', citySchema)
module.exports = City
