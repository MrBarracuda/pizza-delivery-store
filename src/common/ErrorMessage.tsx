import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { WarningIcon } from '../assets/icons-svg'

export function ErrorMessage({ name }: { name?: string }) {
  const {
    formState: { errors },
  } = useFormContext()
  const { t } = useTranslation()

  if (!name) return null

  const error = errors[name]

  if (!error) return null

  return (
    <div className="alert alert-warning mt-2 text-xs shadow-lg">
      <div>
        <WarningIcon />
        <span role="alert"> {t(error.message)}</span>
      </div>
    </div>
  )
}
