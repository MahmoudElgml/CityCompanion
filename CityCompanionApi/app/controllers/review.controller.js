const review = require('../../database/models/review.model')
class reviewClass{
    static add = async(req,res)=>{
        try{
            const reviewToAdd = new review({
                userId: req.user._id,
                ...req.body
            }) 
            await reviewToAdd.save()
            res.send({
                apiStatus:true,
                data:reviewToAdd,
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                date:e.message
            })
        }
    }
    static getMyreviews = async(req,res)=>{
        try{
            const reviewsByType=await review.find({userId:req.user._id,reviewType:"city-in-general"})
            await req.user.populate({
                path:"userReviews"
            }).execPopulate()

            res.status(200).send({
            data: {user:req.user, reviews:/*req.user.userReviews*/reviewsByType}
            })
        }
        catch(e){
            res.status(500).send({
                data:e.message
            })
        }
    }
}
module.exports = reviewClass