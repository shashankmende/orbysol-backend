
require('dotenv').config()

const express = require('express')

const router = require('./router/auth-router')

const cors = require('cors')

const app =express()

app.use(cors())
const connectDb = require('./utils/db')

app.use(express.json())
app.use('/api/auth',router)

const port = process.env.PORT || 3000


connectDb().then(()=>{
    app.listen(port,()=>console.log(`server is running at http://localhost:${port}`))
    
})



