import React from 'react';
import './style.css';


class AppBody extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default AppBody;