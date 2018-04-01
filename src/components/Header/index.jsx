import React from 'react';
import Icon from './icon-12.svg'
import Anton from './anton.jpg'
import {Input} from 'react-materialize'
import {Row} from 'react-materialize'
import './Header.css';
import { signOut } from 'firebase/authService';


const Header = (props) => {
	
	return(
		<div className = 'Header'>
			<Row className = 'Input'>
				<Input s={6} label="First Name" label=" &#128269; Search" />
			</Row>
			<img className = 'Icon' src = {Icon} alt = 'bell' />
			<img className = 'Anton' src = {Anton} alt = 'logo' onClick={signOut} />	
		</div>
	)
}

export default Header;