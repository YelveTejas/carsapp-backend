import express from 'express'
import { Connection } from './db.js'
import { router } from './Routes/User.route.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/',router)
app.listen(process.env.port,()=>{
    console.log('Server Running')
})

Connection()