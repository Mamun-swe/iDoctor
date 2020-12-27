const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(fileUpload())

app.use('/uploads/images', express.static('uploads/images/'))

// Main Routes
// const doctorRoute = require("./api/routes/doctor")
// const patientRoute = require("./api/routes/patient")
const authRoute = require('./api/routes/auth')

// API URL's
app.use('/api/auth', authRoute)
// app.use("/api/doctor", doctorRoute)
// app.use("/api/patient", patientRoute)


app.use((req, res, next) => {
    let error = new Error('404 page Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    if (error.status == 404) {
        return res.status(404).json({
            message: error.message
        })
    }
    if (error.status == 400) {
        return res.status(400).json({
            message: "Bad request"
        })
    }
    return res.status(500).json({
        message: "Internal Server Error"
    })
})


app.get('/', (req, res) => {
    res.send("Hello I am node.js application")
})

// DB Connection
mongoose.connect('mongodb+srv://mamun166009:1118964208@cluster0-lkz2b.mongodb.net/idoctor?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
});
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err)
})
db.once('open', () => {
    console.log('MongoDB connection success')
})

// App Port
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`App running on ${port} port`)
})