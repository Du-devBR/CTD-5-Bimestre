import { Link, Outlet } from 'react-router-dom'
import './style.sass'

export function MainAppLayout(){
  return(
    <div className='main-layout-component'>
      <header>
        <h1>frontend-III</h1>
      </header>
      <aside className='container-aside-classroom'>
          <ul className='list-classrrom'>
            <h2>Aulas</h2>
            <li>
              <Link to="quarta-aula">Quarta Aula</Link>
            </li>
            <li>
              <Link to="quinta-aula">Quinta Aula</Link>
            </li>
            <li>
              <Link to="setima-aula">Setima Aula</Link>
            </li>
            <li>
              {/* link podemos encaminhar uma lista e direcionar para o componente referente */}
              <Link to="oitava-aula">Oitava aula</Link>
            </li>
            <li>
              <Link to="decima-quinta-aula">Decima quinta aula</Link>
            </li>
            <li>
              <Link to="decima-sexta-aula">Decima sexta aula</Link>
            </li>
          </ul>
        </aside>
      <main className='main-layout-component-header'>
        {/* outlet serve para criar as rotas dentro co campo */}
        <Outlet />

      </main>
    </div>
  )
}
