import { useTranslation } from 'react-i18next'

export const ChangeLanguageButtons = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (language: string) => i18n.changeLanguage(language)

  return (
    <>
      <button type="button" onClick={() => changeLanguage('en')}>
        English
      </button>
      <button type="button" onClick={() => changeLanguage('ua')}>
        Ukrainian
      </button>
    </>
  )
}
