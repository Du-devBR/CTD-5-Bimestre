export function CommentComponent(props){
  console.log(props)
  return (
    <>
      <h1>{props.data.name}</h1>
    </>
  )
}
