const Doctor = require('../../../models/Doctor')
const Council = require('../../../models/Council')
const jwt = require('jsonwebtoken')
const Upload = require('../../services/FileUpload')
const CheckId = require('../../middleware/CheckId')

// Me
const Me = async (req, res, next) => {
    try {
        // Split token
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'SECRET')

        // Find account using account id and role
        let account = await Doctor.findOne({
            $and: [{ _id: decode.id }, { role: decode.role }]
        }, { access_token: 0, password: 0 }).exec()

        if (!account) {
            return res.status(404).json({
                status: false,
                message: 'Invalid token'
            })
        }

        return res.status(200).json({
            status: true,
            doctor: account
        })

    } catch (error) {
        if (error) next(error)
    }
}




// Update Profile
const updateProfile = async (req, res, next) => {
    try {
        let filename
        const { id } = req.params
        const {
            name,
            college,
            passingYear,
            specialist,
            currentHospital,
            country,
            city,
            currentAddress,
            latitude,
            longitude,
            day,
            startTime,
            endTime
        } = req.body


        await CheckId(id)

        // Find Profile
        const doctor = await Doctor.findById({ _id: id }).exec()
        if (!doctor) {
            return res.status(404).json({
                status: false,
                message: 'Doctor not found'
            })
        }

        if (req.files) {
            filename = Upload.fileUpload(req.files.image, './uploads/doctor/profiles/')

            const updateData = {
                name: name,
                image: filename,
                updateRange: 40,
                updateStep: 2
            }

            // Update doctor
            const updateDoctor = await doctor.updateOne(
                { $set: updateData },
                { new: true }
            ).exec()

            if (!updateDoctor) {
                return res.status(501).json({
                    message: 'Update error'
                })
            }

            return res.status(200).json({
                status: true,
                message: 'Successfully step one complete.'
            })
        } else if (college && passingYear && specialist && currentHospital) {

            const updateData = {
                college: college,
                passingYear: passingYear,
                specialist: specialist,
                currentHospital: currentHospital,
                updateRange: 60,
                updateStep: 3
            }

            // Update doctor
            const updateDoctor = await doctor.updateOne(
                { $set: updateData },
                { new: true }
            ).exec()

            if (!updateDoctor) {
                return res.status(501).json({
                    message: 'Update error'
                })
            }

            return res.status(200).json({
                status: true,
                message: 'Successfully step one complete.'
            })
        } else if (country && city && currentAddress) {
            const updateData = {
                country: country,
                city: city,
                currentAddress: currentAddress
            }

            // Update address
            const updateDoctor = await doctor.updateOne(
                { $set: { updateRange: 80, updateStep: 4, 'location.address': updateData } },
                { new: true }
            ).exec()

            if (!updateDoctor) {
                return res.status(501).json({
                    message: 'Update error'
                })
            }

            return res.status(200).json({
                status: true,
                message: 'Successfully step one complete.'
            })
        } else if (latitude && longitude) {
            // Update location
            const updateDoctor = await doctor.updateOne(
                { $set: { updateRange: 90, updateStep: 5, 'location.coordinates': [latitude, longitude] } },
                { new: true }
            ).exec()

            if (!updateDoctor) {
                return res.status(501).json({
                    message: 'Update error'
                })
            }

            return res.status(200).json({
                status: true,
                message: 'Successfully step one complete.'
            })
        } else if (day && startTime && endTime) {

            // Add new council
            const newCouncil = new Council({
                doctor: doctor._id,
                schedule: [{ day: day, startTime: startTime, endTime: endTime }]
            })

            let council = await newCouncil.save()

            // set council into doctor
            const updateDoctor = await doctor.updateOne(
                {
                    $set: {
                        updateRange: 100,
                        updateStep: 6,
                        isApproved: 'submitted',
                        'councilHour': [council._id]
                    }
                },
                { new: true }
            ).exec()

            if (council && updateDoctor) {
                return res.status(200).json({
                    status: true,
                    message: 'Successfully all steps completed.'
                })
            }
        }
    } catch (error) {
        if (error) console.log(error)
    }
}


module.exports = {
    Me,
    updateProfile
}