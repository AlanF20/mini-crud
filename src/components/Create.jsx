import { useState } from 'react'
import AlertMessage from './AlertMessage.jsx'
import sendUser from '../services/sendUser.js'
import Header from './Header.jsx'

const Create = () => {
  const [userData, setUserData] = useState({})
  const [isSuccess, setSuccess] = useState()
  const handleOnChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      sendUser(userData)
      setSuccess(true)
    } catch (error) {
      console.error(error)
      setSuccess(false)
    }
  }
  return (
    <>
      <Header />
      <form method='post' onSubmit={handleSubmit} className='form'>
        <label htmlFor='user'>
          Nombre: <input type='text' id='user' name='user' value={userData.name} placeholder='Inserte su name' onChange={handleOnChange} />
        </label>
        <label htmlFor='userEmail'>
          Email: <input type='email' id='userEmail' name='userEmail' value={userData.email} placeholder='Inserte su email' onChange={handleOnChange} />
        </label>
        <label htmlFor='userPassword'>
          Contra <input type='password' id='userPassword' name='userPassword' value={userData.password} placeholder='Inserte su contra' onChange={handleOnChange} />
        </label>
        <input className='form__submit' type='submit' value='Enviar mi informacion' />
      </form>
      <AlertMessage status={isSuccess} />
    </>
  )
}

export default Create
