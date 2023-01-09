import { useEffect, useState } from 'react'
import Header from './Header'
import { User } from './User'

export default function ViewUsers () {
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
      <ul className='users__ul'>
        {users.map(user => {
          return (
            <li className='users__ul-li' key={user.user_id}>
              <User className='users__ul-li-user' user={user} />
            </li>
          )
        })}
      </ul>

    </>
  )
}
