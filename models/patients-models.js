
const mongoose = require('mongoose')

const patientsSchema = new mongoose.Schema({
    lastName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String
    },
    dob:{
        type:String,
        required:true
    },
    pacemaker:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    
    icd:{
        type:String,
        required:true
    }

})

const Patients = new mongoose.model('Patients',patientsSchema)

module.exports = Patients