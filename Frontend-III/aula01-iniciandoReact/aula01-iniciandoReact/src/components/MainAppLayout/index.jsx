import { Link, Outlet } from 'react-router-dom'
import './style.sass'

export function MainAppLayout(){
  return(
    <div className='main-layout-component'>
      <header>
        <h1>Layout</h1>
        <ul>
          <li>
            {/* link podemos encaminhar uma lista e direcionar para o componente referente */}
            <Link to="decima-quinta-aula">Decima quinta aula</Link>
          </li>
          <li>
            <Link to="oitava-aula">Oitava aula</Link>
          </li>
        </ul>
      </header>
      <main className='main-layout-component-header'>
        <p>Conteudo sera carrgado aqui</p>
        {/* outlet serve para criar as rotas dentro co campo */}
        <Outlet />

      </main>
    </div>
  )
}
