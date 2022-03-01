import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'


dotenv.config()

const app = express()

// middLware

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())

// Database

const URI = process.env.MONGODB_URL

mongoose.connect(URI, {
    autoIndex: false
}, (err) => {
    if(err) throw err
    console.log('MongoDB Connection')
})
// Router

app.use('/api', routes)

// Start server

const port = process.env.POST || 5000

app.listen(port,() => {
    console.log(`Express is listening on port ${port}`)
})