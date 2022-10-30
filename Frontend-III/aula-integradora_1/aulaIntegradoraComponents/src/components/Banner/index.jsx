import './style.scss'
import logo from './../../assets/logo_game.png'


export function Banner(){
  return(
    <div className="banner">
      <div className="banner_info">
        <img src={logo} alt="" />
        <div className="title">
          <h2 className='title_white'>Promos ou</h2>
          <h2 className='title_orange'>Descontozuras</h2>
        </div>
        <p>O trocadilho é ruim mas as promoções não!</p>
        <p>Aproveite as assombrosas ofertas de Halloween.</p>
      </div>
    </div>
  )
}
