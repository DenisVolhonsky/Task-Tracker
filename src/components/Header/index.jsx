import React from 'react';
import Icon from './icon-12.svg'
import Anton from './anton.jpg'
import {Input} from 'react-materialize'
import {Row} from 'react-materialize'
import './Header.css';




const Header = () =>  {
	
		return(
		<div className = 'Header'>
			

			<Row className = 'Input'>
  <Input s={6} label="First Name" label=" &#128269; Search" />
</Row>

				<img className = 'Icon' src = {Icon} alt = '' />
				<img className = 'Anton' src = {Anton} alt = '' />


			
			
		</div>
		)
	}

export default Header;