import React from 'react'

export default function 
() {
  return (
    <div className='login-container'>
        {/* <div className='login-text mb-4'> */}
        <div className='login-container-layout'>
          <h1 className='text-2xl'>Log in</h1>
        </div>
        <form>
          <label className='block mb-1'>Username or email address</label>
          <input type='email' name='email' className='border mb-2 p-2' />
          <label className='block mb-1'>Password</label>
          <input type='password' name='password' className='border mb-2 p-2' />
          <div className='mb-2'>
            <input type='checkbox' className='mr-2' />
            <span>Remember me</span>
          </div>
          <button className="py-2 px-4 border border-slate-800 rounded-md bg-blue-500 text-white">
            Log in
          </button>
          <p className='mt-2'>Lost Your Password?</p>
        </form>
      </div>
  )
}
