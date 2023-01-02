import { useState } from "react"


const App = () => {
  const [userData, setUserData] = useState({})
  const handleOnChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const sendUser = await fetch("http://localhost:3000/usuarios", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    const response = await sendUser.json()
  }
  return (
    <form method="post" onSubmit={handleSubmit} className="form">
      <label htmlFor="user">
        Nombre: <input type='text' id='user' name="user" value={userData.name} placeholder='Inserte su name' onChange={handleOnChange} />
      </label>
      <label htmlFor="userEmail">
        Email: <input type='email' id='userEmail' name="userEmail" value={userData.email} placeholder='Inserte su email' onChange={handleOnChange} />
      </label>
      <label htmlFor="userPassword">
        Contra <input type='password' id='userPassword' name="userPassword" value={userData.password} placeholder='Inserte su contra' onChange={handleOnChange} />
      </label>
      <input className="form__submit" type='submit' value='Enviar mi informacion' />
    </form>
  );
}

export default App
