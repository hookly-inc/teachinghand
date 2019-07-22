import React from 'react';
import { Link } from 'react-router-dom';
import macaco from '../../images/macaquinho.png';

const Login = () => {
  return (
    <div className="login">
      <img src={macaco} className="login-logo" alt="Teaching Hand"/>
      <div className="login-container">
        <h1 className="login-container__header">Seja bem vindo!</h1>

        <div className="login-form">
          <form>
            <div className="login-form__group">
              <input type="email" className="login-form__input" placeholder="E-mail"/>
            </div>
            <div className="login-form__group">
              <input type="password" className="login-form__input" placeholder="Senha"/>
            </div> 
            <div className="login-form__group">
              <input type="checkbox" className="login-form__check"/> 
              <label> Manter conectado</label>
            </div>
            <Link className="login-form-button login-form-button__primary" to='/dashboard'>Entrar </Link> 
            <Link className="login-form-button login-form-button__secondary" to='/register'> Cadastrar-se</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;