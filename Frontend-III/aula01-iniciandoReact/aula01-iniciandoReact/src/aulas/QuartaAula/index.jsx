import './style.scss'

export function QuartaAula(){
  const componentFinded = [
    {
      title: 'Video Component',
      image: "dfddd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, corrupti.",
    },
    {
      title: 'Video Component',
      image: "",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, corrupti.",
    }
  ]
  return(
    <div className='quarta-aula-component'>
      <h1 className='main-content'>ola</h1>
      <ul>
        {
          componentFinded.map(component => (
            <li>
              <img src={component.image} alt="" />
              <h1>{component.title}</h1>
              <p>{component.text}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
