import React from 'react'

export const FormInput = ({ name, register, type = 'text' }) => {
  return (
    <>
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
    </>
  )
}
