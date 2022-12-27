import sql from 'mssql'
import * as dotenv from 'dotenv'

dotenv.config()

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  server: 'localhost',
  database: process.env.DB_NAME,
  options: {
    trustServerCertificate: true
  }
}
export default async function getConnection () {
  try {
    const pool = await sql.connect(dbConfig)
    return pool
  } catch (error) {
    console.error(error)
  }
}
export { sql }
