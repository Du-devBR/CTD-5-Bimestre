import { Component } from 'react'
import windows from './../../assets/logoWindows.png'

import './style.scss'

export function CardNewGame(props){

  return(

   <ul>
     {
        <li className="container_card">
          <img src={props.data.picture} alt="" />
          <div className="infoCard">
            <div className="content">
              <h2>{props.data.name}</h2>
              <ul className="list_gamingPlatforms">
                <li><img className='icon_plataform' src={windows} alt="" /></li>
              </ul>
              <p className="list_categories">{props.data.categories.join(", ")}</p>
            </div>
            <p className='price'>{props.data.price}</p>
          </div>
        </li>
     }
   </ul>
  )
}
