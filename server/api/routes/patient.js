const express = require('express')
const router = express.Router()
const Authenticate = require('../middleware/Permission')
const ProfileController = require('../controllers/Patient/ProfileController')

router.get('/me', Authenticate.isPatient, ProfileController.Me)
router.post('/profile/:id/update/photo', Authenticate.isPatient, ProfileController.updatePhoto)

module.exports = router