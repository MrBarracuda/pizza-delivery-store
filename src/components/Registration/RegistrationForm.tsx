import { Form, useForm } from './form'
import { Input } from './input'
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
      className="mb-4 px-8 pt-6 pb-8"
    >
      <div className="mb-4 md:flex md:justify-between">
        <Input label="First Name" type="text" autoFocus {...form.register('firstName')} />
        <Input label="Last Name" type="text" {...form.register('lastName')} />
      </div>

      <Input label="Email" type="email" placeholder="you@example.com" {...form.register('email')} />
      <div className="mb-4 md:flex md:justify-between">
        <Input label="Password" type="password" {...form.register('password')} />
        <Input label="Confirm Password" type="password" {...form.register('confirmPassword')} />
      </div>
      <div className="mb-4">
        <Input label="Accept Terms & Conditions" type="checkbox" className="checkbox checkbox-primary" {...form.register('terms')} />
      </div>
      <div className="mb-6 text-center">
        <button
          className="focus:shadow-outline w-full rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="submit"
        >
          Register Account
        </button>
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
