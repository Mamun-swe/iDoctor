const Doctor = require('../../../models/Doctor')
const Patient = require('../../../models/Patient')
const Appointment = require('../../../models/Appointment')
const hostURL = require('../../utils/url')

// All Approved doctors
const DoctorsIndex = async (req, res, next) => {
    try {
        let doctors = await Doctor.find(
            { isApproved: 'approved' },
            {
                role: 0,
                password: 0,
                access_token: 0,
                createdAt: 0,
                updatedAt: 0,
                status: 0,
                updateRange: 0,
                updateStep: 0,
                email: 0,
                isApproved: 0,
                passingYear: 0,
                location: 0
            }
        )
            .populate('councilHour', 'schedule')
            .exec()
        // If doctor are not available
        if (!doctors.length)
            return res.status(404).json({ status: false, message: 'Doctors not found' })

        // Modifiy image path
        await doctors.map(doctor => {
            if (doctor.image) {
                doctor.image = hostURL(req) + 'uploads/doctor/profiles/' + doctor.image
            } else {
                doctor.image = null
            }
        })

        res.status(200).json({
            status: true,
            doctors
        })

    } catch (error) {
        if (error) next(error)
    }
}

// Set Appointment Request
const SetAppointmentRequest = async (req, res, next) => {
    try {
        const {
            doctorId,
            patientId,
            name,
            phone,
            age,
            height,
            weight,
            bloodPressure,
            problemShortInfo
        } = req.body

        const newAppointment = new Appointment({
            doctorId,
            patientId,
            patient: { name, phone, age, height, weight, bloodPressure, problemShortInfo }
        })

        // Create appoinment
        const createAppointment = await newAppointment.save()
        // Update doctor
        const updateDoctor = await Doctor.findOneAndUpdate(
            { _id: doctorId },
            { $set: { 'appointments': [createAppointment._id] } },
            { new: true }
        ).exec()

        // Update Patient
        const updatePatient = await Patient.findOneAndUpdate(
            { _id: patientId },
            { $set: { 'appointmentRequests': [createAppointment._id] } },
            { new: true }
        ).exec()

        if (createAppointment && updateDoctor && updatePatient)
            return res.status(201).json({
                status: true,
                message: 'Your appointment request has been sent.'
            })

    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}


module.exports = {
    DoctorsIndex,
    SetAppointmentRequest
}