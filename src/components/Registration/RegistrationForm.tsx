import { Checkbox, TextInput, Form, useForm, SubmitButton } from '../../common'

import { validationSchema } from './validationSchema'

export const RegistrationForm = () => {
  const form = useForm({
    schema: validationSchema,
  })

  return (
    <Form
      form={form}
      onSubmit={(data) => {
        console.log(data)
        form.reset()
      }}
      className="form-control w-full max-w-xs"
    >
      <div className="mb-4 md:flex md:justify-between">
        <TextInput label="First Name" autoFocus {...form.register('firstName')} />
        <TextInput label="Last Name" {...form.register('lastName')} />
      </div>

      <TextInput label="Email" type="email" placeholder="you@example.com" {...form.register('email')} />
      <div className="mb-4 md:flex md:justify-between">
        <TextInput label="Password" type="password" {...form.register('password')} />
        <TextInput label="Confirm Password" type="password" {...form.register('confirmPassword')} />
      </div>
      <div className="mb-4">
        <Checkbox label="Accept Terms & Conditions" {...form.register('terms')} />
      </div>
      <div className="mb-6 text-center">
        <SubmitButton text="Register Account" />
      </div>
      <hr className="mb-6 border-t" />
      <div className="text-center">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
      <div className="text-center">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
          Already have an account? Login!
        </a>
      </div>
    </Form>
  )
}
