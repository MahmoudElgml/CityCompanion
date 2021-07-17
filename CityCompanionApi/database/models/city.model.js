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


//cafe
citySchema.virtual('cityCafes', {
    ref:"Cafe",
    localField:"_id",
    foreignField:"cityId"
})
//hotel
citySchema.virtual('cityHotels', {
    ref:"Hotel",
    localField:"_id",
    foreignField:"cityId"
})
//museum
citySchema.virtual('cityMuseums', {
    ref:"Museum",
    localField:"_id",
    foreignField:"cityId"
})

//resturant
citySchema.virtual('cityResturants', {
    ref:"Resturant",
    localField:"_id",
    foreignField:"cityId"
})
//shop
citySchema.virtual('cityShops', {
    ref:"Shop",
    localField:"_id",
    foreignField:"cityId"
})
//walking
citySchema.virtual('cityWalkings', {
    ref:"Walking",
    localField:"_id",
    foreignField:"cityId"
})
const City = mongoose.model('City', citySchema)
module.exports = City
