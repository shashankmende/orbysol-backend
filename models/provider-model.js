
const mongoose = require('mongoose')

const ProviderSchema = new mongoose.Schema({
    orderProvider:{
        type:String,
        required:true
    },
    readingProvider:{
        type:String,
        required:true,
    },
    referringProvider:{
        type:String
    }
})

const Provider = new mongoose.model('Providers',ProviderSchema)

module.exports  = Provider