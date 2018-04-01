import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

const Enter = () => {
	return (
		<div className = "center-align card-panel hoverable">
			<Link to="/register" className="btn-large">Sing up</Link>
			<Link to="/login" className="btn-large">Log in</Link>

		</div>

	) ;
};

export default Enter;