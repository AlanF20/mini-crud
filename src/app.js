import express from 'express'
import userRouter from './routes/user.routes.js'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(userRouter)

export default app
