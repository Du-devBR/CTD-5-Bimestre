import { contents } from "../../assets/translate/contents";
import { useLanguage } from "../../hooks/UseLanguage/useLanguage";
import { ThemeProvider, useTheme } from "../../hooks/UseTheme/UseTheme";

export function Configuration(){

  const { theme, changeTheme} = useTheme()
  const { currentLanguage, changeCurrentLanguage } = useLanguage()

  console.log(theme)
  return(
    <>
      <div>
        <section>
          <h1>{contents.configurationComponent.title[currentLanguage]}</h1>
          <h2>{contents.configurationComponent.titleTheme[currentLanguage]}</h2>
          <div>
            <label htmlFor="light">{contents.configurationComponent.whiteTheme[currentLanguage]}</label>
            <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
          </div>
          <div>
            <label htmlFor="dark">{contents.configurationComponent.darkTheme[currentLanguage]}</label>
            <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
          </div>
        </section>
        <section>
          <h1>{contents.configurationComponent.titleLanguage[currentLanguage]}</h1>
          <div>
            <label htmlFor="language">{contents.configurationComponent.labelLanguage[currentLanguage]}</label>
            <select
              id="language"
              onChange={event => changeCurrentLanguage(event.target.value)}
              value={currentLanguage}
              >
                <option value="portuguese">{contents.configurationComponent.optionPortugueseLanguage[currentLanguage === 'english' ? 'english' : currentLanguage]}</option>
                <option value="english">{contents.configurationComponent.optionEnglishLanguage[currentLanguage === 'portuguese' ? 'english' : currentLanguage]}</option>

            </select>
          </div>
        </section>
      </div>
    </>
  )
}
