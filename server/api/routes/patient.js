const express = require('express')
const router = express.Router()
const FilterDoctorController = require('../controllers/Patient/SearchDoctor')

router.post('/find-doctor', FilterDoctorController.findNearestDoctors)


module.exports = router