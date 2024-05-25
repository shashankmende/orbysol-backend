const mongoose = require('mongoose')

// const uri = 'mongodb://127.0.0.1:27017'
const uri=process.env.MONGO_URI

const connectDb = async()=>{
    try{
        await mongoose.connect(uri)
        console.log('connection to database is successful')
    }
    catch(e){
        console.log('database connection failed:',e)
        process.exit(1)
    }
}


module.exports = connectDb