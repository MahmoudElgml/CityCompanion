const express= require('express')
const cors = require('cors')
require('dotenv').config()
require('../database/connection')
const userRoutes = require('../routes/user.route')
const reviewRoutes = require('../routes/review.route')
const country = require('../database/models/country.model')
const city = require('../database/models/city.model')

const app = express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/user',userRoutes)
app.use('/review',reviewRoutes)
app.post("/country/add",async (req,res)=>{
    try{
        const countryData = new country(req.body)
        await countryData.save()
        //send email==>
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
})

app.post("/city/add",async (req,res)=>{
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
})

module.exports = app