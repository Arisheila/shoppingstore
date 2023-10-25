import React from 'react';
import LoginForm from "./Forms/LoginForm";
import RegisterForm from './Forms/RegisterForm';

export default function Login() {
  return (
    <div className="form-container" style={{ display: 'flex', gap:"212px", padding:"63px 100px", alignItems:"center", justifyContent: 'center' }}>
      <LoginForm />
      <RegisterForm style={{ marginRight:"5rem"}} />
    </div>
  );
}
