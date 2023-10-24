import React from 'react';
import LoginForm from "./Forms/LoginForm";
import RegisterForm from './Forms/RegisterForm';

export default function Login() {
  return (
    <div className="form-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <LoginForm />
      <RegisterForm style={{ marginRight:"5rem"}} />
    </div>
  );
}
