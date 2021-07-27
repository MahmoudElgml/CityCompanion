// userId , type=> txt, meeting, ..., content, image, video, likes, comments =>{details, time},status, timestamps
const mongoose = require('mongoose')
const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    placeId: {
        type: mongoose.Schema.Types.ObjectId,
        /***********required:true,************/
        ref:'Category'
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'City'
    },
    reviewTitle:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    reviewType: {
        type:String,
        enum: ['city-in-general', 'Resturant','Museum','Shop','Walking','Cafe','Hotel'],
        required:true
    },
    reviewDetails:{
        content:{
            type:String,
            default: ""
        },
        image:{
            type:String,
            default: ""
        },
        video:{            
            type:String,
            default: ""
        }
    },
    likes:{
        type:Number,
        default:0
    },
    comments:[
        {        
            comment: {
                details:{
                    type:String
                },
                createdAt:{
                    type:Date,
                    default: new Date()
                }
            }
        }    
    ],
},
{timestamps:true}
)
const Review = mongoose.model('Review', reviewSchema)
module.exports = Review