const express = require('express')
const router = express.Router()
const AuthController = require('../middleware/Permission')
const ProfileController = require('../controllers/Doctor/ProfileController')
const AppointmentController = require('../controllers/Doctor/AppointmentController')

router.get('/me', ProfileController.Me)
router.post('/profile/:id/update', AuthController.isDoctor, ProfileController.updateProfile)

router.get('/appointment/:id/index', AuthController.isDoctor, AppointmentController.Index)

module.exports = router