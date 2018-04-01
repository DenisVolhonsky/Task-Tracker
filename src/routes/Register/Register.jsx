import React from 'react';
import {Row, Col, Preloader, Input, Button} from 'react-materialize';
import { createUser } from 'firebase/authService';
import './style.css';

export default class Register extends React.Component{
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleInputChange = evt => {
    const value = evt.target.value;
    const type = evt.target.name;

    this.setState({ [type]: value });
  };

  handleCreateUser = evt => {
    const { name, email, password } = this.state;
    evt.preventDefault();
    createUser(name, email, password);
  };


  render() {
    const {name, email, password} = this.state;

    return (
      <div className='wrap'>
        <div className='form'>
          <p className='center-align blueColor'>Регистрация</p>
          <Row>
            <p className='orangeColor'>Name</p>
            <Input type="text" name="name" value={name} label="First Name" required onChange={this.handleInputChange} s={12} />

            <p className='orangeColor'>Email</p>
            <Input type="email" name="email" value={email} label="Email" required onChange={this.handleInputChange} s={12} />

            <p className='orangeColor'>Password</p>
            <Input type="password" name="password" value={password} label="password" required onChange={this.handleInputChange} s={12} />
            <Button waves='light' className='center-align orangeColorBg' onClick={this.handleCreateUser}>СОХРАНИТЬ</Button>
          </Row>
        </div>
      </div>

    );
  }
}