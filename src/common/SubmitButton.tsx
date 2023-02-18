import { useFormContext } from 'react-hook-form'

import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string
}

export const SubmitButton = ({ text, ...props }: ButtonProps) => {
  const {
    formState: { isSubmitting },
  } = useFormContext()

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`btn-wide btn ${isSubmitting ? 'loading' : ''}`}
      {...props}
    >
      {text}
    </button>
  )
}
