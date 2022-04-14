import { FormEvent, useState } from 'react'

import supabase from '../src/services/supabase';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function signUp(e: FormEvent) {
    e.preventDefault()

    const { user, session, error } = await supabase.auth.signUp({
      email: username,
      password: password,
    })

    console.log(user, session, error)
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-80">
        <h2 className="mb-4 text-center text-lg font-bold">Create User</h2>
        <div className="space-y-4 rounded-md bg-white p-6 shadow-md">
          <form onSubmit={signUp}>
            <div>
              <label
                className="mb-1 block text-sm text-gray-800"
                htmlFor="email"
              >
                Email
                <input
                  className="text-smtext-gray-800 w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 placeholder-gray-300 transition duration-200 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
                  id="email"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label
                className="mb-1 block text-sm text-gray-800"
                htmlFor="password"
              >
                Senha
                <input
                  className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 placeholder-gray-300 transition duration-200 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <div>
              <button className=" w-full rounded bg-blue-500 px-3 py-2 text-sm text-white shadow hover:bg-blue-600">
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
