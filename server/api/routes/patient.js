const express = require('express')
const router = express.Router()
const ProfileController = require('../controllers/Patient/ProfileController') 

router.get('/me', ProfileController.Me)

module.exports = router