import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function LoginForm(){
  return (
    <form className='login-form'>
      <h1>Login Form</h1>
      <input name="email" type="email" placeholder='username' />
      <input name="password" type='password'placeholder='password' />
      <button type="submit">Submit</button>
    </form>
  );
}
export default LoginForm;