import React from 'react';
import BoxForm from '../../components/BoxForm';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="login">
      <BoxForm title="Junte-se a nós!">
        <form>
            <div className="box-form__group">
              <input type="text" className="box-form__input" placeholder="Nome completo"/>
            </div>

            <div className="box-form__group">
              <input type="text" className="box-form__input" placeholder="Data de nascimento"/>
            </div>

            <div className="box-form__group">
              <input type="email" className="box-form__input" placeholder="E-mail"/>
            </div>

            <div className="box-form__group">
              <input type="password" className="box-form__input" placeholder="Senha"/>
            </div> 

            <div className="box-form__group">
              <input type="password" className="box-form__input" placeholder="Confirme sua senha"/>
            </div> 

            <div className="box-form__buttons">
              <Link className="box-form--button box-form--button__secondary" to='/dashboard'>Enviar</Link>
              <Link to='/' className="box-form__link">Já sou cadastrado</Link>
            </div>

          </form>
      </BoxForm>
    </div>
  )
}

export default Register;