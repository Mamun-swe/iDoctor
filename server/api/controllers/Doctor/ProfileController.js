const Doctor = require('../../../models/Doctor')
const jwt = require('jsonwebtoken')
const Upload = require('../../services/FileUpload')

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


const fileUpload = file => {
    // Get file extension from filename
    const extension = file.name.split('.')[1]
    // Rename file with datetime format
    const filename = Date.now() + '.' + extension
    // Upload path
    path = './uploads/doctor/profiles' + filename
    // Move file to path
    const moveFile = file.mv(path)

    if (!moveFile) {
        return res.status(501).json({ message: 'file upload error' })
    }

    return filename
}

// Update Profile
const updateProfile = async (req, res, next) => {
    try {
        let filename
        const { name } = req.body

        if (name && req.files) {
            filename = await fileUpload(req.files.image)

            // const updateData = {
            //     name: name,
            //     image: filename
            // }

            // // Update doctor
            // const updateDoctor = await book.updateOne(
            //     { $set: updateData },
            //     { new: true }
            // ).exec()
        }

        return res.status(200).json({
            message: 'success'
        })



    } catch (error) {
        if (error) console.log(error)
    }
}


module.exports = {
    Me,
    updateProfile
}