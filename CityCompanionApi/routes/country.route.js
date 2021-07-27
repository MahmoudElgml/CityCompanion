const express = require('express')
const router = new express.Router()
const countryController = require('../app/controllers/country.controller')
const auth = require('../app/middleware/auth')

router.post('/add', auth, countryController.add)
module.exports=router