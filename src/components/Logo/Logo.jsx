// import { ReactComponent as LogoIcon} from './logo.svg';
import React, { Component } from 'react'
import './logo.png'

export default class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={require('./logo.png')} alt='POMODO-IT' style={logoStyle}/>
      </React.Fragment>
    )
  }
}

const logoStyle = {
  flex: '1',
  backgroundImage: 'url(./logo.png)',
  height: '100%',
  width: '100%',
  margin: '0',
  padding: '5px'
}