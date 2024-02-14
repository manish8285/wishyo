import React from 'react'
import Login from './Login'

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
              LogIn
            </span>
          </h2>

          <Login />

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-500 hover:underline"
              
            >
              Sign Up
            </a>
          </p>
          </div>
      </div>
  )
}

export default LoginPage