const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="w-80">
        <h2 className="font-bold text-center text-lg mb-4">Login</h2>
        <div className="bg-white shadow-md rounded-md p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-800 mb-1" htmlFor="email">
              Email
              <input 
                className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-smtext-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" 
                id="email" 
                type="text"/>
            </label>
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1" htmlFor="password">
              Senha
              <input 
                className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" 
                id="password"  
                type="password"/>
            </label>
          </div>

          <div>
            <button className=" w-full text-sm bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white shadow">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login