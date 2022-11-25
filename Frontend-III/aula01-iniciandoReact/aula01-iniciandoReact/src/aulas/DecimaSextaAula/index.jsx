import { useState } from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { DecimaSextaAulaComponent } from '../../components/DecimaSextaAulaComponent'
import { CommentComponent } from '../../components/DecimaSextaAulaComponent/CommentsComponent'
import './style.sass'


export function DecimaSextaAula(){

  const [post, setPost] = useState([])
  const [idComment, setIdComment] = useState()
  const [idParam, setIdParam] = useState()
  const [comments, setComments] = useState([])

  console.log(comments)


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then(response => {
      response.json()
      .then(address => {
        setPost(address)
      })
    })
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${idComment}`)
    .then(response => {
      response.json()
      .then(data => {
        setComments([data])
      })
    })
  }, [idComment])



  function showComments(current){

    setIdComment(current.id)
  }

  return(

    <div>
      <div className='container-post'>
      {
        post.map((posts, index) => (
          <DecimaSextaAulaComponent
            key = {index}
            data = {posts}
            onViewComments = {current => showComments(current)}
          />
        ))

      }

    </div>
    <div>
      {
        comments.map((comments) => {
          <CommentComponent
            key = {comments.id}
            data = {comments}
          />
        })
      }
    </div>
    </div>
  )
}
