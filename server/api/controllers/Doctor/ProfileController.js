const Doctor = require('../../../models/Doctor')
const jwt = require('jsonwebtoken')

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
        if (error) console.log(error)
        // next(error)
    }
}


module.exports = {
    Me
}