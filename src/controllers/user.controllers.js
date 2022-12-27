import getConnection, { sql } from '../database/connection.js'

const pool = await getConnection()

export const getUsers = async (req, res) => {
  const query = await pool.request().query('SELECT * FROM usuario')
  res.json(query.recordset)
}

export const addUser = async (req, res) => {
  const { user, userEmail, userPassword } = req.body
  await pool.request()
    .input('user_name', sql.VarChar, user)
    .input('user_email', sql.VarChar, userEmail)
    .input('user_password', sql.VarChar, userPassword)
    .query(`INSERT INTO usuario (user_name, user_email, user_password) VALUES (@user_name, @user_email, @user_password);
  `)
  res.json({ user, userEmail, userPassword })
}

export const getUser = async (req, res) => {
  const { id } = req.params
  const query = await pool.request()
    .input('id', id)
    .query('SELECT * FROM usuario WHERE id = @id')
  res.json(query.recordset)
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  const query = await pool.request()
    .input('id', sql.Int, id)
    .query('DELETE FROM usuario WHERE id = @id')
  res.json(query.recordset)
}
