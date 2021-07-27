const express= require('express')
const cors = require('cors')
require('dotenv').config()
require('../database/connection')
const userRoutes = require('../routes/user.route')
const reviewRoutes = require('../routes/review.route')
const countryRoutes = require('../routes/country.route')
const cityRoutes = require('../routes/city.route')
const placeRoutes = require('../routes/place.route')

const app = express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/user',userRoutes)
app.use('/review',reviewRoutes)
app.use('/country',countryRoutes)
app.use('/city',cityRoutes)
app.use('/place',placeRoutes)

module.exports = app