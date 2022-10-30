import './style.scss'

export function CardItem(props){
  console.log(props)
  return(

    <>
      <li className="container_card">
        <img src={props.data.picture} alt="" />
        <div className="content">
          <div className="infoCard">
            <h2>{props.data.name}</h2>
            <p>{props.data.categories.join(', ')}</p>
          </div>
          <div className="price">
            <span className='oldPrice'>{props.data.oldPrice}</span>
            <span className='newPrice'>{props.data.newPrice}</span>
          </div>
        </div>
      </li>
    </>
  )
}
