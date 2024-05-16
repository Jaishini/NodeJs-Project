// imports
import express from 'express'
import cors from 'cors'
import { config as configDotenv } from 'dotenv'
import { rateLimit } from 'express-rate-limit'

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

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 2, // maximum number of requests allowed in the window
    message: 'Too many requests, please try after 1 minute.',
    header: true,
  });

// routes
app.use(limiter)
app.use('/users', userRouter)
app.use('/token', tokenRouter)

app.listen(4000, () => {
    console.log('Server running: http://localhost:4000')
})