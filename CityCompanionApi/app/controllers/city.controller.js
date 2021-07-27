const city = require('../../database/models/city.model')

class cityClass{
    static add = async (req,res)=>{
        try{
            const cityData = new city(req.body)
            await cityData.save()
            //send email==>
            res.status(200).send({
                apiStatus: true,
                data: cityData,
                message: "city added successful"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message, 
                message: "error adding new city"
            })
        }
    }
    
}
module.exports = cityClass