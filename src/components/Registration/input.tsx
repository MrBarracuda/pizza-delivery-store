import { forwardRef } from 'react'

import { ErrorMessage } from './ErrorMessage'

import type { InputProps } from './types'

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, type = 'text', name, ...props }, ref) => (
  <div className="mb-4 md:mr-2 md:mb-0">
    <label htmlFor={name} className="mb-2 block text-sm font-bold text-gray-700">
      {label}
    </label>
    <input
      type={type}
      ref={ref}
      name={name}
      className={props.className ? props.className : 'input-bordered input-primary input w-full max-w-xs'}
      {...props}
    />
    <ErrorMessage name={name} />
  </div>
))
