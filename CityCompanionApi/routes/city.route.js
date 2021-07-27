const express = require('express')
const router = new express.Router()
const cityController = require('../app/controllers/city.controller')
const auth = require('../app/middleware/auth')

router.post('/add', auth, cityController.add)
module.exports=router