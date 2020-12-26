const Doctor = require('../../../models/Doctors')

const registerAccount = async (req, res, next) => {
    const {
        name,
        email,
        phone,
        country,
        city,
        address,
        locationLatitude,
        locationLongitude
    } = req.body

    try {

        const newDoctor = new Doctor({
            name,
            email,
            phone,
            country,
            city,
            address,
            location: {
                "coordinates": [locationLatitude, locationLongitude]
            }
        })

        let doctor = await newDoctor.save()
        if (doctor) {
            return res.status(201).json({
                message: "Account successfully created"
            })
        }

    } catch (error) {
        if (error) {
            // next(error)
            console.log(error.message)
        }
    }
}


module.exports = {
    registerAccount
}