import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='flex justify-center flex-col w-full p-6 rounded-b-lg bg-[#3f6ef5] dark:bg-blue-950 bg-clip-padding backdrop-filter
            border-4 border-[#9cc5fe] border-b-[#1d2f96] dark:border-b-indigo-500 shadow-lg shadow-[#000000]/60 dark:shadow-[#4c3bff]/80'>
            <h1 className='flex justify-center text-3xl font-bold text-white'>Login</h1>
            <form action="">
                <div>
                    <label className="laber p-2">
                        <span className="text-sm text-white">Email</span>
                        <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
            </form>
            <button className="btn bg-white dark:bg-[#111111] text-black dark:text-white border-[#e5e5e5] p-8 m-auto">
                Login with Email
            </button>
        </div>
    </div>
  )
}

export default Login;