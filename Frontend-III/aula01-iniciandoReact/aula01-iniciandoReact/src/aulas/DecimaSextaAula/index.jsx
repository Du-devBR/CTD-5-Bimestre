import { useState } from 'react'
import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { DecimaSextaAulaComponent } from '../../components/DecimaSextaAulaComponent'
import './style.sass'


export function DecimaSextaAula(){

  const [post, setPost] = useState([])
  const [idPost, setIdPost] = useState(1)
  const [idParam, setIdParam] = useState()
  const { id } = useParams()

  // console.log(id)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(response => {
      response.json()
      .then(data => {
        setPost(data)
      })
    })
  }, [idPost])

  function getPostByUser(){
    setIdPost(idPost + 1)
  }



  return(
    <>
      <h1>Posts</h1>
          <div className="container-card-post">
          <h1>{post.userId}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>


        </div>
      <button onClick={getPostByUser}>Proximo</button>
    </>
  )
}
