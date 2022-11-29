import { ThemeProvider, useTheme } from "../../hooks/UseTheme/UseTheme";

export function Configuration(){

  const { theme, changeTheme} = useTheme()

  console.log(theme)
  return(
    <>
      <div>
        <section>
          <h1>Tema</h1>
          <div>
            <label htmlFor="light">Claro</label>
            <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
          </div>
          <div>
            <label htmlFor="dark">Escuro</label>
            <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
          </div>
        </section>
      </div>
    </>
  )
}
