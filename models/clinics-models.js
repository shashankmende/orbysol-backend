

const mongoose = require('mongoose')

const ClinicSchema = new mongoose.Schema({
    clinicName:{
        type:String,
        required:true
    },
    deviceName:{
        type:String,
        required:true
    },
    enrollmentType:{
        type:String,
        require:true
    }
})

const Clinic = new mongoose.model('Clinic',ClinicSchema)

module.exports = Clinic