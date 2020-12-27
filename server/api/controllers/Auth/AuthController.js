const User = require('../../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// Register Account
const Register = async (req, res, next) => {
    try {
        const { name, email, role, password } = req.body

        // Check account
        const check = await User.findOne({ email: email }).exec()
        if (check)
            return res.status(208).json({
                status: false,
                message: 'This email already used.'
            })

        // Password Hash
        let hashPassword = await bcrypt.hash(password, 10)

        // Create account object
        let newAccount = new User({
            name: name,
            email: email,
            role: role,
            password: hashPassword
        })

        // Save information
        const saveAccount = await newAccount.save()
        if (saveAccount)
            return res.status(201).json({
                status: true,
                message: "Successfully account created"
            })

    } catch (error) {
        if (error)
            // next(error)
            console.log(error);
    }
}

// Login Account
const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        // Account find using email 
        let account = await User.findOne({ email }).exec()

        // Compare with password
        if (account) {
            const result = await bcrypt.compare(password, account.password)
            if (result) {

                // Generate JWT token
                const token = await jwt.sign(
                    { id: account._id, name: account.name, role: account.role },
                    'SECRET', { expiresIn: '1d' }
                )

                // Update JWT token 
                const updateToken = await User.findOneAndUpdate({ _id: account._id },
                    { $set: { 'access_token': token, 'status': 'online' } },
                    { new: true }).exec()

                if (updateToken) {
                    return res.status(200).json({
                        status: true,
                        token
                    })
                }
                return res.status(404).json({
                    status: false,
                    message: 'Invalid e-mail or password'
                })

            }
            return res.status(404).json({
                status: false,
                message: 'Invalid e-mail or password'
            })
        }

        res.status(404).json({
            status: false,
            message: 'Invalid e-mail or password'
        })
    } catch (error) {
        if (error) next(error)
    }
}

// Reset Password
const Reset = async (req, res, next) => {
    try {
        const { email } = req.body

        console.log({ email, password })
    } catch (error) {
        if (error) next(error)
    }
}

// Logout
const Logout = async (req, res, next) => {
    try {
        // Split token
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'SECRET')

        // Find account using account id and role
        let account = await User.findOne({
            $and: [
                { _id: decode.id },
                { role: decode.role }
            ]
        })
        if (!account) {
            return res.status(404).json({
                status: false,
                message: 'Invalid token'
            })
        }

        // Find account and null token field 
        const updateToken = await User.findByIdAndUpdate({ _id: decode.id }, { $set: { 'access_token': null, 'status': 'offline' } })
        if (!updateToken) {
            return res.status(404).json({
                status: false,
                message: 'Invalid token'
            })
        }

        res.status(200).json({
            status: true,
            message: 'Successfully logged out'
        })

    } catch (error) {
        if (error) {
            res.status(501).json({
                status: false,
                message: error.message
            })
        }
    }
}

// Me
const Me = async (req, res, next) => {
    try {
        // Split token
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'SECRET')

        // Find account using account id and role
        let account = await User.findOne({
            $and: [
                { _id: decode.id },
                { role: decode.role }
            ]
        },
            { name: 1, email: 1, image: 1 }
        ).exec()
        
        if (!account) {
            return res.status(404).json({
                status: false,
                message: 'Invalid token'
            })
        }

        return res.status(200).json({
            status: true,
            user: account
        })

    } catch (error) {
        if (error) next(error)
    }
}


module.exports = {
    Register,
    Login,
    Reset,
    Logout,
    Me
}