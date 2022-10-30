import { Component } from 'react'
import windows from './../../assets/logoWindows.png'

import './style.scss'

export function TabItem(props){

  return(
        <li className="container_tabItem">
          <img src={props.data.picture} alt="" />
          <div className="infoTabItem">
            <div className="content">
              <h2>{props.data.name}</h2>
              <ul className="list_gamingPlatforms">
                <li><img className='icon_plataform' src={windows} alt="" /></li>
              </ul>
              <p className="list_categories">{props.data.categories.join(", ")}</p>
            </div>
            <span className='price'>{props.data.price}</span>
          </div>
        </li>
  )
}
