import { useEffect, useState } from 'react'
import Header from './Header'

export default function Users () {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/usuarios')
      .then(response => response.json())
      .then(user => setUsers(user))
  }, [])
  return (
    <>
      <Header />
      <h1>Usuarios creados hasta el momento</h1>
      <ul>
        {users.map(user => {
          return (
            <li key={user.user_id}>
              <p>{user.user_name}</p>
              <p>{user.user_email}</p>
            </li>
          )
        })}
      </ul>

    </>
  )
}
