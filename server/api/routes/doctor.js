const express = require('express')
const router = express.Router()
const ProfileController = require('../controllers/Doctor/ProfileController')

router.get('/me', ProfileController.Me)
router.post('/profile/:id/update', ProfileController.updateProfile)

module.exports = router