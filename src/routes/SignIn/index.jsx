import React from 'react';
import {Row, Col, Preloader, Input, Button} from 'react-materialize';
import { signIn } from 'firebase/authService';
import './style.css';

export default class SignIn extends React.Component{
	state = {
        email: '',
        password: ''
    };

    handleInputChange = evt => {
        const value = evt.target.value;
        const type = evt.target.name;

        this.setState({ [type]: value });
    };

    handleSignInUser = evt => {
        const { email, password } = this.state;
        evt.preventDefault();
        signIn(email, password);
    };

	render() {
		const {email, password} = this.state;

		return (
		<div className='wrap'>
		<div className='form'>
			<p className='center-align blueColor'>Вход</p>
			<Row>
				<p className='orangeColor'>Email</p>
				<Input type="email" name="email" value={email} label="Email" required onChange={this.handleInputChange} s={12} />
				<p className='orangeColor'>Password</p>
		    	<Input type="password" name="password" value={password} label="password" required onChange={this.handleInputChange} s={12} />
		    	<Button waves='light' className='btnEnter orangeColorBg' onClick={this.handleSignInUser}>ВОЙТИ</Button>
			</Row>
		</div>
		</div>

		);	
	}
}