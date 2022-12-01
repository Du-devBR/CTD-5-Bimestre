import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '../../hooks/UseTheme/UseTheme'
import './style.sass'

export function MainAppLayout(){

  const { theme } = useTheme()
  return(
    <div className={`main-layout-component ${theme}`}>
      <header className=''>
        <h1 className={theme}>frontend-III</h1>
      </header>
      <aside className={`container-aside-classroom ${theme}`}>
          <ul className='list-classrrom'>
            <h2 className={theme}>Aulas</h2>
            <li className={theme}>
              <Link to="quarta-aula">Quarta Aula</Link>
            </li>
            <li className={theme}>
              <Link to="quinta-aula">Quinta Aula</Link>
            </li>
            <li className={theme}>
              <Link to="setima-aula">Setima Aula</Link>
            </li>
            <li className={theme}>
              {/* link podemos encaminhar uma lista e direcionar para o componente referente */}
              <Link to="oitava-aula">Oitava aula</Link>
            </li>
            <li className={theme}>
              <Link to="decima-quinta-aula">Decima quinta aula</Link>
            </li>
            <li className={theme}>
              <Link to="decima-sexta-aula/post">Decima sexta aula</Link>
            </li>
            <li className={theme}>
              <Link to='decima-setima-aula'>Decima setima aula</Link>
            </li>
            <li className={theme}>
              <Link to='configuration'>Configurações</Link>
            </li>
          </ul>
        </aside>
      <main className='main-layout-component-header'>
        {/* outlet serve para criar as rotas dentro do campo */}
        <Outlet />

      </main>
    </div>
  )
}
