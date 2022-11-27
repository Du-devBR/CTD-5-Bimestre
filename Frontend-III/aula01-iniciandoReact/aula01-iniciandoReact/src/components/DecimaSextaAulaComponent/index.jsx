
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


import './style.sass'

export function DecimaSextaAulaComponent(){

  const [post, setPost] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then(response => {
      response.json()
      .then(address => {
        setPost(address)
      })
    })
  }, [])

  return(
    <div className='container-card-post'>
        {
          post.map((posts) => (
            <div className="info-post" key={posts.id}>
              <h1>user {posts.userId}</h1>
              <h2>{posts.title}</h2>
              <p>{posts.body}</p>
              <Link
                data={posts.id}
                to={`comment/${posts.id}`}
                className = 'btn-view-comments'
                >
                  Ver comentarios
              </Link>
            </div>
          ))
        }

    </div>
  )


}
