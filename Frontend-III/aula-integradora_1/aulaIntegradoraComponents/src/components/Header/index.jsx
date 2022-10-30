import './style.scss'
import logo from './../../assets/logo_game.png'

export function Header(){
  return(
    <>
      <div className="container_header">
       <img src={logo} alt="" />
        <nav className='menu_nav'>
          <ul className='list_nav'>
            <li>Store</li>
            <li>Library</li>
            <li>Community</li>
            <li>About</li>
            <li>Profile</li>
          </ul>
        </nav>
      </div>
    </>
  )
}
