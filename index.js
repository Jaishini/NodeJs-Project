// imports
import express from 'express'
import cors from 'cors'
import { config as configDotenv } from 'dotenv'

// internal imports
import userRouter from './routes/insuranceRouter.js'
import tokenRouter from './routes/token.js'
import dbConfig from './config/db.js'


// configuration
const app = express()
configDotenv()
dbConfig()

//middlewares / modules
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/uploads',express.static('uploads'))

// routes
app.use('/users', userRouter)
app.use('/token', tokenRouter)

app.listen(4000, () => {
    console.log('Server running: http://localhost:4000')
})