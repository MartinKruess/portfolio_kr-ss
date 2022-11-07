import { createContext, useState, useEffect } from 'react'

export const SettingContext = createContext()

// ----------------- LS LOAD -----------------
const lsLanguage = localStorage.getItem('lang')

// ----------------- USER -----------------
export const SideSetting = ({ children }) => {
    const [language, setLanguage] = useState(lsLanguage || false)

  // Handle userData and jwt-Token by change
  useEffect(() => {
    //SAVE Token to LocalStorage
    language && localStorage.setItem('lang', JSON.stringify(language))
  }, [language])
  console.log('lang', language)

  return (
    <SettingContext.Provider value={{ language, setLanguage}}>
      {children}
    </SettingContext.Provider>
  )
}