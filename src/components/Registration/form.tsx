import { zodResolver } from '@hookform/resolvers/zod'
import { useForm as useHookForm, FormProvider, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import type { ComponentProps } from 'react'
import type { UseFormProps as UseHookFormProps, UseFormReturn, FieldValues, SubmitHandler } from 'react-hook-form'
import type { ZodSchema, TypeOf } from 'zod'

interface UseFormProps<T extends ZodSchema> extends UseHookFormProps<TypeOf<T>> {
  schema: T
}

export const useForm = <T extends ZodSchema>({ schema, ...formConfig }: UseFormProps<T>) => {
  return useHookForm({
    ...formConfig,
    resolver: zodResolver(schema),
  })
}

interface FormProps<T extends FieldValues = any> extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
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
