const mongoose = require('mongoose')
const categorySchema =new mongoose.Schema({

    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'City'
    },
    category:{
        type:String,
        enum: ['Resturant','Museum','Shop','Walking','Cafe','Hotel'],
        required:true
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
categorySchema.virtual('placeReviews', {
    ref:"Review",
    localField:"_id",
    foreignField:"placeId"
})
const Category = mongoose.model('Category', categorySchema)
module.exports = Category