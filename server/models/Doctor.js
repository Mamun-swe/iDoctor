const { Schema, model } = require("mongoose")

const validateEmail = function (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

const doctorSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 50,
        default: null
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: [validateEmail, 'Please provide a valid email address']
    },
    role: {
        type: String,
        default: "doctor",
        enum: ["doctor"]
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        default: null
    },
    college: {
        type: String,
        trim: true,
        default: null
    },
    passingYear: {
        type: Date,
        default: null
    },
    specialist: {
        type: String,
        trim: true,
        default: null
    },
    currentHospital: {
        type: String,
        trim: true,
        default: null
    },
    location: {
        address: {
            country: {
                type: String,
                trim: true,
                default: null
            },
            city: {
                type: String,
                trim: true,
                default: null
            },
            currentAddress: {
                type: String,
                trim: true,
                default: null
            },
        },
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            default: null
        }
    },
    councilHour: [{
        type: Schema.Types.ObjectId,
        ref: 'Council'
    }],
    access_token: {
        type: String,
        trim: true,
        default: null
    },
    status: {
        type: String,
        default: "offline",
        enum: ["online", "offline"]
    },
    isApproved: {
        type: String,
        enum: ["approved", "pending", "submitted", "canceled"],
        default: "pending"
    },
    updateRange: {
        type: Number,
        enum: [5, 10, 20, 20, 25, 20],
        default: 5
    },
    updateStep: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        default: 1
    }
}, {
    timestamps: true
})

const Doctor = model('Doctor', doctorSchema)

module.exports = Doctor;