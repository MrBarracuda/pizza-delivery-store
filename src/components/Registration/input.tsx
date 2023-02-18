import { forwardRef } from 'react'

import { ErrorMessage } from './ErrorMessage'

import type { InputProps } from './types'

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, type = 'text', ...props }, ref) {
  return (
    <div className="mb-4 md:mr-2 md:mb-0">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="mb-2 block text-sm font-bold text-gray-700">{label}</label>
      <input
        type={type}
        ref={ref}
        className={
          props.className
            ? props.className
            : 'focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 focus:outline-none'
        }
        {...props}
      />
      <ErrorMessage name={props.name} />
    </div>
  )
})
