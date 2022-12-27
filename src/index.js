import app from './app.js'
import * as dotenv from 'dotenv'
import './database/connection.js'

dotenv.config()

app.listen(process.env.PORT)

console.log(`servidor escuchando desde ${process.env.PORT}`)
