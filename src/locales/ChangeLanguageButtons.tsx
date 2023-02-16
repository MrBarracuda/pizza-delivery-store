import { useTranslation } from 'react-i18next'

export const ChangeLanguageButtons = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ua')}>Ukrainian</button>
    </div>
  )
}
