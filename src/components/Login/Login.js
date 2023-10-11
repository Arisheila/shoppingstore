import React, { useState } from 'react';
import axios from "axios";

export default function Login() {
  const [email, setEmail] =useState(" ")

  const handleRegister = (e) => {
    e.preventDefault();

  };


  return (
    <div className='container flex justify-between'>
      {/* Login Form */}
      {/* <div className='login w-1/2 p-4'> */}
      <div className='login-container'>
        {/* <div className='login-text mb-4'> */}
        <div className='login-container-layout'>
          <h1 className='text-2xl'>Log in</h1>
        </div>
        <form>
          <label className='block mb-1'>Username or email address</label>
          <input type='email' name='email' className='border mb-2 p-2 w-full' />
          <label className='block mb-1'>Password</label>
          <input type='password' name='password' className='border mb-2 p-2 w-full' />
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

      {/* Registration Form */}
      {/* <div className='login w-1/2 p-4'> */}
      <div className='login-container'>
        {/* <div className='login-text mb-4'> */}
        <div className='layout-register'>
          <h1 className='text-2xl'>Register</h1>
        </div>
        <form>
          <label className='block mb-1'>Email Address</label>
          <input type='email' name='email' className='border mb-2 p-2 w-full' />
          <p> A link to set your new password will be sent to your email <br/> address </p>
          
          <p> Your personal data will be used to support your<br/> experience throughout this website, to manage access <br/> to your account, and for other purposes described in our<br/> <b> privacy policy.</b></p>
          <button className="py-2 px-4 border border-slate-800 rounded-md bg-green-500 text-white">
            Register
          </button>
          <p className='mt-2'>Lost Your Password?</p>


        </form>
      </div>
    </div>
  );
}
