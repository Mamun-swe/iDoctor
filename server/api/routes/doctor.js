const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/Doctor/AuthController')

router.post('/register', AuthController.registerAccount)


module.exports = router