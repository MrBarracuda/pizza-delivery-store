import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import type { ErrorMessageProps } from './types'

export function ErrorMessage({ name }: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext()
  const { t } = useTranslation()

  if (!name) return null

  const error = errors[name]

  if (!error) return null

  // @ts-ignore
  return <span className="mt-2 text-xs italic text-red-500">{t(error.message)}</span>
}
