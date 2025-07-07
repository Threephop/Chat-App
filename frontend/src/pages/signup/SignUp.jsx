import React, { use } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
    const [input, setInput] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(input);
    };

    const handleCheckboxChange = (gender) => {
        setInput({ ...input,gender});
    };
    
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='flex justify-center flex-col w-full p-6 rounded-b-lg bg-[#3f6ef5] dark:bg-blue-950 bg-clip-padding backdrop-filter
            border-4 border-[#9cc5fe] border-b-[#1d2f96] dark:border-b-indigo-500 shadow-lg shadow-[#000000]/60 dark:shadow-[#4c3bff]/80'>
            <h1 className='flex justify-center text-3xl font-bold text-white mb-5'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="laber p-2">
                        <span className="text-sm text-white">Full Name</span>
                        <input type="username" placeholder="Enter your full name" className="input input-bordered w-full max-w-xs h-10"
                            value={input.fullName}
                            onChange={(e) => setInput({ ...input, fullName: e.target.value })} 
                        />
                    </label>
                </div>

                <div>
                    <label className="laber p-2">
                        <span className="text-sm text-white">Username</span>
                        <input type="username" placeholder="Enter your username" className="input input-bordered w-full max-w-xs h-10" 
                            value={input.username}
                            onChange={(e) => setInput({ ...input, username: e.target.value })}
                        />
                    </label>
                </div>

                <div>
                    <label className="laber p-2">
                        <span className="text-sm text-white">Password</span>
                        <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs h-10" 
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                        />
                    </label>
                </div>

                <div>
                    <label className="laber p-2">
                        <span className="text-sm text-white">Comfirm Password</span>
                        <input type="password" placeholder="Enter your comfirm password" className="input input-bordered w-full max-w-xs h-10" 
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                        />
                    </label>
                </div>

                <Link to="/login" className="text-sm text-white hover:underline hover:text-blue-500 dark:hover:text-blue-500 mt-2">
                    Already have an account?
                </Link>

                <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender={input.gender}/>

                <button className="btn btn-block btn-sm bg-white dark:bg-[#111111] text-black dark:text-white border-[#e5e5e5] 
                hover:text-blue-500 dark:hover:text-blue-500 hover:border-blue-900 p-8 m-auto mt-4">
                    Sign Up
                </button>
            </form>
            
        </div>
    </div>
  )
}

export default SignUp


//starting point for a signup page using React and Tailwind CSS

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='flex justify-center flex-col w-full p-6 rounded-b-lg bg-[#3f6ef5] dark:bg-blue-950 bg-clip-padding backdrop-filter
//             border-4 border-[#9cc5fe] border-b-[#1d2f96] dark:border-b-indigo-500 shadow-lg shadow-[#000000]/60 dark:shadow-[#4c3bff]/80'>
//             <h1 className='flex justify-center text-3xl font-bold text-white mb-5'>Sign Up</h1>
//             <form action="">
//                 <div>
//                     <label className="laber p-2">
//                         <span className="text-sm text-white">Full Name</span>
//                         <input type="username" placeholder="Enter your full name" className="input input-bordered w-full max-w-xs h-10" />
//                     </label>
//                 </div>

//                 <div>
//                     <label className="laber p-2">
//                         <span className="text-sm text-white">Username</span>
//                         <input type="username" placeholder="Enter your username" className="input input-bordered w-full max-w-xs h-10" />
//                     </label>
//                 </div>

//                 <div>
//                     <label className="laber p-2">
//                         <span className="text-sm text-white">Password</span>
//                         <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs h-10" />
//                     </label>
//                 </div>

//                 <div>
//                     <label className="laber p-2">
//                         <span className="text-sm text-white">Comfirm Password</span>
//                         <input type="password" placeholder="Enter your comfirm password" className="input input-bordered w-full max-w-xs h-10" />
//                     </label>
//                 </div>

//                 <a href="#" className="text-sm text-white hover:underline hover:text-blue-500 dark:hover:text-blue-500 mt-2">
//                     Already have an account?
//                 </a>

//                 <GenderCheckBox />

//                 <button className="btn btn-block btn-sm bg-white dark:bg-[#111111] text-black dark:text-white border-[#e5e5e5] 
//                 hover:text-blue-500 dark:hover:text-blue-500 hover:border-blue-900 p-8 m-auto mt-4">
//                     Sign Up
//                 </button>
//             </form>
            
//         </div>
//     </div>
//   )
// }

// export default SignUp