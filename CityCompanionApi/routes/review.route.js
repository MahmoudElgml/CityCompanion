const express = require('express')
const router = new express.Router()
const reviewController = require('../app/controllers/review.controller')
const auth = require('../app/middleware/auth')

router.post('/add', auth, reviewController.add)
router.get('/me', auth, reviewController.getMyreviews)
module.exports=router