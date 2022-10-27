import './Style.scss'

export function QuintaAulaItem(props){

  console.log(props)
  return(
      <li>
        <img src={props.dados.image} alt="" />
        <h1>{props.dados.title}</h1>
        <p>{props.dados.text}</p>
      </li>
  )
}



//componente filho
