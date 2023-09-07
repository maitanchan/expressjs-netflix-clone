import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

import authRoute from './routes/auth.route.js'
import listRoute from './routes/list.route.js'
import movieRoute from './routes/movie.route.js'
import userRoute from './routes/user.route.js'

const app = express()

dotenv.config()

const port = process.env.PORT || 9000

//Connect to MongoDB
const connect = async () => {

    try {

        await mongoose.connect(process.env.MONGO)

        console.log("Connected to MongoDB")

    } catch (err) {

        throw err

    }

}

//Middleware
const corsOptions = {

    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,

}
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

//Routes
app.use("/api/auth", authRoute)
app.use("/api/lists", listRoute)
app.use("/api/movies", movieRoute)
app.use("/api/users", userRoute)

app.use((err, req, res, next) => {

    const statusError = err.status || 500

    const messageError = err.message || "Đã xảy ra lỗi"

    return res.status(statusError).json({

        success: false,
        status: statusError,
        message: messageError

    })

})

app.listen(port, () => {

    connect()
    console.log(`Server is running at http://localhost:${port}`)

})