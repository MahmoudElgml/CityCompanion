const mongoose = require('mongoose')
const countrySchema = new mongoose.Schema({

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
    },
    countrySchema.virtual('countryReviews', {
        ref:"review",
        localField:"_id",
        foreignField:"countryId"
    })












})