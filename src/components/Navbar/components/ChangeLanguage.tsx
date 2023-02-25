import { useTranslation } from 'react-i18next'

export const ChangeLanguage = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (language: string) => i18n.changeLanguage(language)

  return (
    <>
      <button type="button" className="btn-secondary btn-sm btn" onClick={() => changeLanguage('en')}>
        EN
      </button>
      <button type="button" className="btn-accent btn-sm btn" onClick={() => changeLanguage('ua')}>
        UA
      </button>
    </>
  )
}
