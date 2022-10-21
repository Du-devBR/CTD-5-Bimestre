import './style.scss'

export function Card(){

  const components = [
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      channelName: 'Lorem, ipsum.',
      image: 'https://i.ytimg.com/vi/tFVhJ4_fr5A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2NDE498esVqEtiSIMur8dqcEZeg',
      logoChannel: 'https://yt3.ggpht.com/ytc/AMLnZu8de2WItU0builwtVD-hW4NyvUpwxmf2Tr__eGf8Q=s68-c-k-c0x00ffffff-no-rj',
      views: '1 mil visualizações',

    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      channelName: 'Lorem, ipsum.',
      image: 'https://i.ytimg.com/vi/yn4xYkptwsk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRpVkisxPEfmv8_SxNZSFaQpRzig',
      logoChannel: 'https://yt3.ggpht.com/QkJ_ErSLbd6KaGTB7LuapExwnMr8QxgorEKS54Yp1qs4p94o3COmmThJyoBee1tsrC_5Q7Bbjg=s68-c-k-c0x00ffffff-no-rj',
      views: '1 mil visualizações',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      channelName: 'Lorem, ipsum.',
      image: 'https://i.ytimg.com/vi/Y25LDO6OLzQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxJmCcDva3R00uF25tqutpSzhxOg',
      logoChannel: 'https://yt3.ggpht.com/TjTejuN9m3afkvR63NMp5GlTuXmufCWxT-Io5pK6AlTwiaPM91_tK181zsB7NtdtvUxzYQPG=s88-c-k-c0x00ffffff-no-rj',
      views: '1 mil visualizações',
    }
  ]


  return(
    <main className='container_aula_3'>
      <h2>Cards</h2>
      <ul className='card'>
        {
          components.map(component => (
            <li>
              <img src={component.image} alt="" />
              <div className="channel">
                <img src={component.logoChannel} alt="" />
                <div className="content">
                  <h2>{component.name}</h2>
                  <span>{component.channelName}</span>
                  <span>{component.views}</span>
                </div>
              </div>

            </li>
          ))
        }

      </ul>
    </main>
  )
}
