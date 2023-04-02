import express from 'express'
import http from 'http'
import mongoose from 'mongoose'
import { config } from './config/config'
import authorRoutes from './routes/Author'

const app = express()

mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('Connected to database')
        startServer()
    }).catch(err => {
        console.log(err);
    })

// Start server

const startServer = () => {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    // Routes
    app.use('/authors', authorRoutes)

    // Healthchek
    app.get('/ping', (req, res) => {
        res.status(200).json({ message: 'pong' })
    })

    // Error Handling
    app.use((req, res, next) => {
        const error = new Error('not found')
        return res.status(404).json({ message: error.message })
    })

    // 
    app.listen(3000, () => {
        console.log("Server listening on 3000");
        
    })
}