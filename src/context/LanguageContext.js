import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: 'EN',
  changeLanguage: k => {
    console.log(k)
  },
})

export default LanguageContext
