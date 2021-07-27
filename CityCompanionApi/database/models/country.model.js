const mongoose = require('mongoose')
const countrySchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:true,
        enum:["Egypt","Italy","Spain"],
        minlength:2,
        maxlength:20
    },
    image:{
        type:String,
        trim:true,
    },
})

countrySchema.virtual('countryCities', {
    ref:"City",
    localField:"_id",
    foreignField:"countryId"
})

const Country = mongoose.model('Country', countrySchema)
module.exports = Country