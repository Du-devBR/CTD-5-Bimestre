import './style.scss'

export function TerceiraAula(){

  const components = [
    {
      name: 'Chris Stapleton',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolore.',
      image: 'https://i.ytimg.com/vi/OflpWQCPQOw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVNiwk4Pp9lxU0mdW8A575N5qqUw',
    },
    {
      name: 'Aula-4 implementando wi-fi',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolore.',
      image: 'https://i.ytimg.com/vi/eez4ixlL75M/hq720_live.jpg?sqp=COTbx5oG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpqROBgWWZKFwciOfk4USNQLesew',
    },
    {
      name: 'Aula-4 implementando wi-fi',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolore.',
      image: 'https://i.ytimg.com/vi/eez4ixlL75M/hq720_live.jpg?sqp=COTbx5oG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpqROBgWWZKFwciOfk4USNQLesew',
    }
  ]

  console.log(components)
  return(
    <main className='container_aula_3'>
      <h1>Lista de componentes encontrados</h1>
      <h2>Site: Youtube</h2>
      <ul className='card'>
        {
          components.map(component => (
            <li>
              <img src={component.image} alt="" />
              <h2>{component.name}</h2>
              <p>{component.description}</p>
            </li>
          ))
        }

      </ul>
    </main>
  )
}
