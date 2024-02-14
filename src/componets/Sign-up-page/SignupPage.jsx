import React from 'react'
import Sign from './Sign'

const SignupPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
              Sign up
            </span>
          </h2>


          <Sign />

          <div className="mt-4">
            <p className="text-center text-gray-600">Already have an account <a className="color-primary" href="/login">Login</a></p>
            {/* <div className="flex justify-center mt-2">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2"
              >
                <BiLogoTwitter />
              </a>
              <a
                href="#"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                <RiGoogleFill />
              </a>
            </div> */}
          </div>
        </div>
      </div>
  )
}

export default SignupPage