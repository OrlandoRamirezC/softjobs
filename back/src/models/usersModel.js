import pool from '../../config.js'
import bcrypt from 'bcryptjs'

/* export const getUserModel = async () => {
  const sqlQuery = 'SELECT * FROM usuarios'
  const response = await pool.query(sqlQuery)
  console.log(response.rows)
  return response.rows
} */
export const getUserModel = async (email) => {
  const sqlQuery = {
    text: 'SELECT email, rol, lenguage FROM usuarios WHERE email = $1',
    values: [email]
  }
  const response = await pool.query(sqlQuery)
  console.log(response.rows)
  return response.rows
}

export const createUserModel = async (email, password, rol, lenguage) => {
  const hashedPassword = bcrypt.hashSync(password)
  const SQLquery = {
    text: 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING email, rol, lenguage',
    values: [email, hashedPassword, rol, lenguage]
  }

  const response = await pool.query(SQLquery)
  return response.rows[0]
}

export const findUserByEmailModel = async (email) => {
  const SQLquery = {
    text: 'SELECT * FROM usuarios WHERE email = $1',
    values: [email]
  }
  const response = await pool.query(SQLquery)
  return response.rows[0]
}
