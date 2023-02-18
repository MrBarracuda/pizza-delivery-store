import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import { validationSchema } from './validationSchema'

import type { ValidationSchema } from './validationSchema'
import { RegistrationErrorMessage } from './RegistrationErrorMessage'
import {FormInput} from "./FormInput";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data)

  return (
    <form className="mb-4 px-8 pt-6 pb-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="firstName">
            First Name
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 focus:outline-none"
            id="firstName"
            type="text"
            placeholder="First Name"
            {...register('firstName')}
          />
          <ErrorMessage errors={errors} name="firstName" render={RegistrationErrorMessage} />
        </div>
        <div className="md:ml-2">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 focus:outline-none"
            id="lastName"
            type="text"
            placeholder="Last Name"
            {...register('lastName')}
          />
          <ErrorMessage errors={errors} name="lastName" render={RegistrationErrorMessage} />
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 focus:outline-none"
          id="email"
          type="email"
          placeholder="Email"
          {...register('email')}
        />
        <ErrorMessage errors={errors} name="email" render={RegistrationErrorMessage} />
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 focus:outline-none"
            id="password"
            type="password"
            {...register('password')}
          />
          <ErrorMessage errors={errors} name="password" render={RegistrationErrorMessage} />
        </div>
        <div className="md:ml-2">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="c_password">
            Confirm Password
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 focus:outline-none"
            id="c_password"
            type="password"
            {...register('confirmPassword')}
          />
          <ErrorMessage errors={errors} name="confirmPassword" render={RegistrationErrorMessage} />
        </div>
      </div>
      <div className="mb-4">
        <input type="checkbox" id="terms" {...register('terms')} />

        <label htmlFor="terms" className="ml-2 mb-2 text-sm font-bold text-gray-700">
          Accept Terms & Conditions
        </label>
        <ErrorMessage errors={errors} name="terms" render={RegistrationErrorMessage} />
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
        <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
      <div className="text-center">
        <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
          Already have an account? Login!
        </a>
      </div>
    </form>
  )
}
