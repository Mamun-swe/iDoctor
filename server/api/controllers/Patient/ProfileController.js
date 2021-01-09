const Patient = require('../../../models/Patient')
const jwt = require('jsonwebtoken')
const Upload = require('../../services/FileUpload')
const CheckId = require('../../middleware/CheckId')
const publicURL = require('../../utils/url')

// Me
const Me = async (req, res, next) => {
    try {
        // Split token
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'SECRET')

        // Find account using account id and role
        let account = await Patient.findOne({
            $and: [
                { _id: decode.id },
                { role: decode.role }
            ]
        }, { access_token: 0, password: 0 }).exec()

        if (!account) {
            return res.status(404).json({
                status: false,
                message: 'Invalid token'
            })
        }

        if (account.image) {
            for (const property in account) {
                if (property === "image")
                    account[property] = publicURL(req) + 'uploads/patient/profiles/' + account[property]
            }
        }

        return res.status(200).json({
            status: true,
            patient: account
        })

    } catch (error) {
        if (error) next(error)
    }
}

module.exports = {
    Me
}