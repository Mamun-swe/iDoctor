const Appointment = require('../../../models/Appointment')
const CheckId = require('../../middleware/CheckId')

// Appointment Index
const Index = async (req, res, next) => {
    try {
        const { id } = req.params
        await CheckId(id)

        const results = await Appointment.find({ doctor: id })
            .populate('patientId', '_id')
            .exec()
        if (!results.length)
            return res.status(404).json({
                status: false,
                message: 'Request not found'
            })

        res.status(200).json({
            status: true,
            requests: results
        })

    } catch (error) {
        if (error) next(error)
    }
}


module.exports = {
    Index
}