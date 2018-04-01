import React from 'react';
import './style.css';


class AppBody extends React.Component {
	render() {
		return (
			<div className="AppBody">
				{this.props.children}
			</div>
		);
	}
}

export default AppBody;