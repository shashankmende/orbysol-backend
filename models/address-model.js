
const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    address1:{
        type:String,
        required:true
    },
    address2:{
        type:String,
        
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    },
    primaryPhone:{
        type:Object,
        required:true
    },

    secondaryPhone:{
        type:Object,
        required:true
    }

    
})


const Address = new mongoose.model("Address",addressSchema)

module.exports = Address