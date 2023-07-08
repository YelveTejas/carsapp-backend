import express from 'express'
import { login, signup } from '../Controllers/Signup.controller.js'
import { carspost } from '../Controllers/Carspost.controller.js'
import { getpost } from '../Controllers/Getposts.controller.js'

const router = express.Router()


router.post('/signup',signup)
router.post('/login',login)
router.post('/carpost',carspost)
router.get('/getpost',getpost)

router.get('/',async(req,res)=>{
    res.send('Everything is Running Fine')
})
export{router}