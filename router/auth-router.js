
const express = require('express')

const router = express.Router()

const authController = require('../controllers/auth-controllers')
// const register = require('../controllers/auth-controllers')

//two ways to define routers
//1
// router.get('/rei',(req,res)=>{
//     res.send("we are in router page")
// })

//2

router.route('/').get(authController.home)

router.route('/register').post(authController.register)

router.route('/details').get(authController.getDetails)

module.exports = router