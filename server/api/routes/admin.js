const express = require('express')
const router = express.Router()
const DoctorController = require('../controllers/Admin/DoctorController')

router.get('/doctor', DoctorController.Index)
router.get('/doctor/:id/show', DoctorController.Show)
router.put('/doctor/:id/account/update/:status', DoctorController.UpdateStatus)

module.exports = router