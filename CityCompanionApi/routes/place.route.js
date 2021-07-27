const express = require('express')
const router = new express.Router()
const placeController = require('../app/controllers/place.controller')
const auth = require('../app/middleware/auth')

router.post('/add', auth, placeController.add)
module.exports=router