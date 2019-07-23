import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import macaco from '../images/macaquinho.png';

class BoxForm extends Component {
  render() {
      return (
        <div className="box-form">
          <img src={macaco} className="box-form__logo" alt="Teaching Hand"/>
    
          <div className="box-form__container">
            <h1 className="login-container__header">{this.props.title}</h1>
            <div className="box-form__form">
              {this.props.children}
            </div>
          </div>
        </div>
    );
  }
}

export default BoxForm;