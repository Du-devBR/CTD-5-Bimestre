import { Card } from '../../components/QuintaAula/Card'
import { YoutubeLogo } from 'phosphor-react'
import './style.scss'

export function QuintaAula(){
  const componentFinded = [
    {
      id: 1,
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      channelName: 'Lorem, ipsum.',
      image: 'https://i.ytimg.com/vi/tFVhJ4_fr5A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2NDE498esVqEtiSIMur8dqcEZeg',
      logoChannel: 'https://yt3.ggpht.com/ytc/AMLnZu8de2WItU0builwtVD-hW4NyvUpwxmf2Tr__eGf8Q=s68-c-k-c0x00ffffff-no-rj',
      views: '1 mil visualizações',

    },
    {
      id: 2,
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      channelName: 'Lorem, ipsum.',
      image: 'https://i.ytimg.com/vi/yn4xYkptwsk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRpVkisxPEfmv8_SxNZSFaQpRzig',
      logoChannel: 'https://yt3.ggpht.com/QkJ_ErSLbd6KaGTB7LuapExwnMr8QxgorEKS54Yp1qs4p94o3COmmThJyoBee1tsrC_5Q7Bbjg=s68-c-k-c0x00ffffff-no-rj',
      views: '1 mil visualizações',
    },
    {
      id: 3,
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      channelName: 'Lorem, ipsum.',
      image: 'https://i.ytimg.com/vi/Y25LDO6OLzQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxJmCcDva3R00uF25tqutpSzhxOg',
      logoChannel: 'https://yt3.ggpht.com/TjTejuN9m3afkvR63NMp5GlTuXmufCWxT-Io5pK6AlTwiaPM91_tK181zsB7NtdtvUxzYQPG=s88-c-k-c0x00ffffff-no-rj',
      views: '1 mil visualizações',
    }
  ]
  return(
   <>
     <div className="header">
      <h1>Lista de componentes encontrados</h1>
      <div className="logo">
        <h2>Site: Youtube</h2>
        <YoutubeLogo size={32} color="#c4302b"/>
      </div>
    </div>
    <div className='quinta-aula-component'>
      <h2>Cards</h2>
      <ul className='card'>
        {
          componentFinded.map(component => (
           <Card
             key={component.id}
             dados={component}/>
          ))
        }
      </ul>
    </div>
   </>
  )
}

//componente pai
