const place = require('../../database/models/category.model')
class placeClass {
    static add = async (req, res) => {
        try {
            const placeData = new place(req.body)
            await placeData.save()
            //send email==>
            res.status(200).send({
                apiStatus: true,
                data: placeData,
                message: "place added successful"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error adding new place"
            })
        }

    }
}
module.exports = placeClass