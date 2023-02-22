import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

import { ErrorMessage } from './ErrorMessage'

import type { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  label: string
}

export const TextInput = forwardRef<HTMLInputElement, InputProps>(({ label, name, type = 'text', ...props }, ref) => {
  const { t } = useTranslation()
  return (
    <div>
      <label htmlFor={name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        ref={ref}
        name={name}
        className="input-bordered input-primary input w-full max-w-xs"
        {...props}
      />
      <ErrorMessage name={name} />
    </div>
  )
})
