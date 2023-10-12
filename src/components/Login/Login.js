import React, { useState } from 'react';
import axios from "axios";
import LoginForm from './Forms/LoginForm';
import RegisterForm from './Forms/RegisterForm';

export default function Login() {



  return (
    <div className='containers'>

      <LoginForm  />
      <RegisterForm />
      
    </div>
  );
}
