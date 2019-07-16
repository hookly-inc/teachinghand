import React, { Component } from 'react';
import monkey from '../images/macaquinho.png';

class Assistant extends Component{
  render() {
    return (
      <div className='assistant'>
        <img src={monkey} alt='Assistant Monkey' width='200'/>
      </div>
    );
  }
}

export default Assistant;
