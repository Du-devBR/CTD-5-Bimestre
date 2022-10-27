import './style.scss'

export function Card(props){

  console.log(props)
  return(
    <li>
    <img src={props.dados.image} alt="" />
    <div className="channel">
      <img src={props.dados.logoChannel} alt="" />
      <div className="content">
        <h2>{props.dados.name}</h2>
        <span>{props.dados.channelName}</span>
        <span>{props.dados.views}</span>
      </div>
    </div>

  </li>
  )
}



//componente filho
