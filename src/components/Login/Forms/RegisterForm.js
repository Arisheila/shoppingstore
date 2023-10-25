import React, { useState } from 'react';

export default function RegisterForm() {
  const [email, setEmail] = useState(""); // Remove the extra space in useState

  const handleRegister = (e) => {
    e.preventDefault();
    
    console.log(email)
    // Add your registration logic here
  };

  return (
    <div className='login-container'>
      <div className='layout-register'>
        <h1 className='text-2xl'>Register</h1>
      </div>
      <form onSubmit={handleRegister}>
        <label className='block mb-1'>Email Address</label>
        <input
          type='email'
          name='email'
          value={email} // Bind the email state to the input value
          onChange={(e) => setEmail(e.target.value)} // Update the email state when the input changes
          className='border mb-2 p-2'
        />
        <p> A link to set your new password will be sent to your email address </p>
        <p>
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b>
        </p>
        <button className="py-2 px-4 border border-slate-800 rounded-md bg-blue-500 text-white">
          Register
        </button>
        <p className='mt-2'>Lost Your Password?</p>
      </form>
    </div>
  );
}
