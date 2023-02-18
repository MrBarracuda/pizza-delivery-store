import { forwardRef } from 'react'

import { ErrorMessage } from './ErrorMessage'

import type { CheckboxProps } from './types'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, name, ...props }, ref) => (
  <>
    <label htmlFor={name} className="label cursor-pointer">
      <span className="label-text">{label}</span>
      <input type="checkbox" ref={ref} name={name} className="checkbox-primary checkbox" {...props} />
    </label>
    <ErrorMessage name={name} />
  </>
))
