import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.sass'

export function CommentComponent(){


  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => {
        response.json()
        .then(data => {
          setComments(data)

        })
      })
  }, [])
  return (
    <>
        <div className='comments-post'>
        {
          comments.map((comment, index) => (
            <div className="user-comment" key={index}>
              <h1>{comment.email}</h1>
              <span>{comment.body}</span>
            </div>
          ))
        }
      </div>
    </>
  )
}
