import { QuintaAulaItem } from '../../components/QuintaAulaItem'
import './style.scss'

export function QuintaAula(){
  const componentFinded = [
    {
      id: 1,
      title: 'Video Component',
      image: "dfddd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, corrupti.",
    },
    {
      id: 2,
      title: 'Video Component',
      image: "",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, corrupti.",
    }
  ]
  return(
    <div className='quinta-aula-component'>
      <h1 className='main-content'>ola</h1>
      <ul>
        {
          componentFinded.map(component => (
           <QuintaAulaItem
             key={component.id}
             dados={component}/>
          ))
        }
      </ul>
    </div>
  )
}

//componente pai
