
import { CommentComponent } from './CommentsComponent'
import './style.sass'

export function DecimaSextaAulaComponent(props){

  return(
    <div className="container-card-post">
      <h1>user {props.data.userId}</h1>
      <h2>{props.data.title}</h2>
      <p>{props.data.body}</p>
      <button onClick={() => props.onViewComments(props.data)}> Ver comentarios</button>

    </div>
  )


}
