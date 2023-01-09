import { Link } from 'react-router-dom'
export default function Header () {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__nav-ul'>
          <li className='header__nav-ul-li'>
            <Link to='/' className='header__nav-ul-li-link'>Inicio</Link>
          </li>
          <li className='header__nav-ul-li'>
            <Link to='/Crear' className='header__nav-ul-li-link'>Crear usuario</Link>
          </li>
          <li className='header__nav-ul-li'>
            <Link to='/Ver' className='header__nav-ul-li-link'>Ver usuarios</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
