import React from 'react';
import { Link } from 'react-router-dom';
import BoxForm from '../../components/BoxForm';

const Login = () => {
  return (
    <div className="login">
      <BoxForm title="Seja bem vindo!">
          <form>
            <div className="box-form__group">
              <input type="email" className="box-form__input" placeholder="E-mail"/>
            </div>

            <div className="box-form__group">
              <input type="password" className="box-form__input" placeholder="Senha"/>
            </div> 

            <div className="box-form__group">
              <input type="checkbox" className="box-form__check"/> 
              <label> Manter conectado</label>
            </div>

            <div className="box-form__buttons">
              <Link className="box-form--button box-form--button__primary" to='/dashboard'>Entrar </Link> 
              <Link className="box-form--button box-form--button__secondary" to='/register'> Cadastrar-se</Link>
            </div>
            
          </form>
      </BoxForm>
    </div>
  )
}

export default Login;