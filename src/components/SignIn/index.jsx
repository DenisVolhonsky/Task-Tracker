import React from 'react';

import {Row, Col, Preloader, Input, Button} from 'react-materialize';
import './style.css';

export default class SignIn extends React.Component{
	render() {
		return (
		<div className='wrap'>
		<div className='form'>
			<p className='center-align blueColor'>Вход</p>
			<Row>
				<p className='orangeColor'>Email</p>
				<Input type="email" label="Email" s={12} />
				<p className='orangeColor'>Password</p>
		    	<Input type="password" label="password" s={12} />
		    	 <Button waves='light' className='btnEnter orangeColorBg'>ВОЙТИ</Button>
			</Row>
		</div>
		</div>

		);	
	}
}