const { Schema, model } = require("mongoose")

const councilSchema = new Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    schedule: [{
        day: {
            type: String,
            trim: true,
            required: true
        },
        time: {
            type: Date,
            required: true
        }
    }]
})

const Council = model('Council', councilSchema)

module.exports = Council;