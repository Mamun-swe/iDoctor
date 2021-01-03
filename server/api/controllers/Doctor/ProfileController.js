const Doctor = require('../../../models/Doctor')
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
        const { name, college, passingYear, specialist, currentHospital } = req.body


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
        }


    } catch (error) {
        if (error) console.log(error)
    }
}


module.exports = {
    Me,
    updateProfile
}