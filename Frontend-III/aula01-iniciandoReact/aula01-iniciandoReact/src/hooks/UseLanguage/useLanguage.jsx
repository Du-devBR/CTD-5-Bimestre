import { useContext, useState } from "react";
import { createContext } from "react";

const LanguageContext = createContext()

export function LanguageProvider(props){

  const [currentLanguage, setCurrentLanguage] = useState('portuguese')
  const languageAllowed = ['english', 'portuguese']

  function changeCurrentLanguage(language){

    const languageIsAllowed = languageAllowed.includes(language)

    if(language !== currentLanguage && languageIsAllowed){
      setCurrentLanguage(language)
    }

  }

  return(
    <LanguageContext.Provider value={ {currentLanguage, changeCurrentLanguage} } >
      { props.children }
    </LanguageContext.Provider>
  )
}

export function useLanguage(){
  const context = useContext(LanguageContext)

  return context
}
