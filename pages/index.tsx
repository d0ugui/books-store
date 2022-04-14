import Image from 'next/image'
import { FormEvent, useState } from 'react'
import supabase from '../src/services/supabase'

import books from '../src/assets/books.jpg'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function signUp(e: FormEvent) {
    e.preventDefault()

    const { user, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    })

    console.log({ user })
  }

  return (
    <div className="grid h-screen w-full grid-cols-1 sm:grid-cols-2">
      <div className="hidden sm:block">
        <Image src={books} alt="" />
      </div>

      <div className="flex flex-col justify-center bg-gray-800">
        <form
          className="mx-auto w-full max-w-[400px] rounded-lg bg-gray-900 p-8 px-8"
          onSubmit={signUp}
        >
          <h2 className="text-center text-4xl font-bold uppercase text-white">
            Sign In
          </h2>
          <div className="flex flex-col py-2 text-gray-400">
            <label>
              Email
              <input
                className="mt-2 w-full rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="email"
                name="email"
                id="email"
              />
            </label>
          </div>
          <div className="flex flex-col py-2 text-gray-400">
            <label>
              Password
              <input
                className="mt-2 w-full rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                name="password"
                id="password"
              />
            </label>
          </div>
          <div className="flex justify-between py-2 text-gray-400">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember me
            </p>
            <p>Forgot Password</p>
          </div>
          <button
            className="my-5 w-full rounded-lg bg-teal-500 py-2 font-semibold text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
