import './style.scss'

export function Shorts(){

  const components = [
    {
      image: 'https://i.ytimg.com/vi/blgicc9UIL0/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAl759utJUS9aWuYzA7dXF2eimnWA',
      name: 'Lorem, ipsum.',
      views: '1 mil visualizações',
    },
    {
      image: 'https://i.ytimg.com/vi/blgicc9UIL0/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAl759utJUS9aWuYzA7dXF2eimnWA',
      name: 'Lorem, ipsum.',
      views: '1 mil visualizações',
    },
    {
      image: 'https://i.ytimg.com/vi/blgicc9UIL0/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAl759utJUS9aWuYzA7dXF2eimnWA',
      name: 'Lorem, ipsum.',
      views: '1 mil visualizações',
    },
    {
      image: 'https://i.ytimg.com/vi/blgicc9UIL0/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAl759utJUS9aWuYzA7dXF2eimnWA',
      name: 'Lorem, ipsum.',
      views: '1 mil visualizações',
    },
    {
      image: 'https://i.ytimg.com/vi/blgicc9UIL0/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAl759utJUS9aWuYzA7dXF2eimnWA',
      name: 'Lorem, ipsum.',
      views: '1 mil visualizações',
    },
  ]
  return(
    <>
      <main className="container_shorts">
      <h2>Shorts</h2>
      <ul className='shorts'>
        {
          components.map(componet => (
            <li>
              <img src={componet.image} alt="" />
              <h2>{componet.name}</h2>
              <span>{componet.views}</span>
            </li>
          ))
        }
      </ul>
      </main>
    </>

  )
}
