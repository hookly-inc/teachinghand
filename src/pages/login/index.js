import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h1>Página de login</h1>
        <Link to='/dashboard'>Entrar </Link> | 
        <Link to='/register'> Cadastrar-se</Link>
      </div>
    </div>
  )
}

export default Login;