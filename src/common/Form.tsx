import { zodResolver } from '@hookform/resolvers/zod'
import { useForm as useHookForm, FormProvider } from 'react-hook-form'

import type { FormProps, UseFormProps } from './types'
import type { FieldValues } from 'react-hook-form'
import type { ZodSchema } from 'zod'

export const useForm = <T extends ZodSchema>({ schema, ...formConfig }: UseFormProps<T>) => {
  return useHookForm({
    ...formConfig,
    resolver: zodResolver(schema),
  })
}

export const Form = <T extends FieldValues>({ form, onSubmit, children, ...props }: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        <fieldset disabled={form.formState.isSubmitting}>{children}</fieldset>
      </form>
    </FormProvider>
  )
}
