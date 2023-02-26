import type { ComponentProps, ComponentPropsWithRef } from 'react'
import type { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'
import type { UseFormProps as UseHookFormProps } from 'react-hook-form/dist/types/form'
import type { TypeOf, ZodSchema } from 'zod'

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export interface FormProps<T extends FieldValues = any> extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
}

export interface UseFormProps<T extends ZodSchema> extends UseHookFormProps<TypeOf<T>> {
  schema: T
}

export interface InputProps extends ComponentPropsWithRef<'input'> {
  label: string
}

export interface CheckboxProps extends ComponentPropsWithRef<'input'> {
  label: string
}
