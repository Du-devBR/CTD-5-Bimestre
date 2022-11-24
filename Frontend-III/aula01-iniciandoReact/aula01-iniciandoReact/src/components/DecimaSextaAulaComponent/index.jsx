import './style.sass'

export function DecimaSextaAulaComponent(props){
  return(
    <div className="container-card-post">
      <h1>{props.data.userId}</h1>
      <h2>{props.data.title}</h2>
      <p>{props.data.body}</p>
    </div>
  )
}
