const features = ['Crear usuario', 'Ver usuarios']
const listOfFeatures = features.map((feature, index) => {
  return (
    <li key={index} className='header__nav-ul-li'>
      <a href='#'>{feature}</a>
    </li>
  )
})

export function Header () {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__nav-ul'>
          {listOfFeatures}
        </ul>
      </nav>
    </header>
  )
}
