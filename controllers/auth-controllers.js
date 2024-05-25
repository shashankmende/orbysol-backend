
const Clinic = require('../models/clinics-models')
const Patients = require('../models/patients-models')
const Address = require('../models/address-model')
const Provider = require('../models/provider-model')

const home = async (req,res)=>{
    try{
        res.send("we are in controllers.js jdieie")

    }
    catch(e){
        
        console.log('error',e)
    }
}

const register = async(req,res)=>{
    try{
        const {
            clinicData,
            patientDetails,
            addressDetails,
            orderingData
        } = req.body
        const {clinicName,deviceName,enrollmentType} =clinicData
        await Clinic.create({clinicName,deviceName,enrollmentType})
        
       
        const {name} = patientDetails
        const {firstName,lastName,middleName} = name
        const {dob,gender,pacemaker,icd} = patientDetails
        const newDate =new Date(dob)
const dateOnly = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());


        await Patients.create({lastName,firstName,middleName,dob:dateOnly.toLocaleDateString(),gender,pacemaker,icd})
       
        
        const {address,primaryPhone,secondaryPhone} = addressDetails
        const {address1,address2} = address
    const {city,state,zip} = addressDetails
    await Address.create({address1,address2,city,state,primaryPhone,secondaryPhone,zip})
    

    const {orderProvider,readingProvider,referringProvider} = orderingData
        await Provider.create({orderProvider,readingProvider,referringProvider})

    }
    catch(e){
        console.log("error in registration page",e)
        res.status(500).send('Internal Server Error');

    }
}

const getDetails = async(req,res)=>{
    console.log('we are in this page http://localhost:3000/api/auth/details')
    const clinicRsponse = await Clinic.find()
    
    
    const patientsResponse = await Patients.find()
   const addressResponse =  await Address.find()
    const providerResponse = await Provider.find()
    const details = { clinic:clinicRsponse,
        patients: patientsResponse,
        address: addressResponse,
        provider: providerResponse
     }

     res.send(details)
}

module.exports.home = home
module.exports.register = register
module.exports.getDetails = getDetails
