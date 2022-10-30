import './style.scss'

export function Header(){
  return(
    <>
      <div className="container_header">
       <h1>Dh Hames</h1>
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
