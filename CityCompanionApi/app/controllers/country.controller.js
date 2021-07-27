const review = require('../../database/models/country.model')
class countryClass{
    static add = async(req,res)=>{
        try{
            const countryData = new country(req.body)
            await countryData.save()
            res.status(200).send({
                apiStatus: true,
                data: countryData,
                message: "country added successful"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message, 
                message: "error adding new country"
            })
        }
    }
}
module.exports = countryClass