import React from 'react';
import firebase from 'firebase';
import './App.css';
import config from '../../firebase/firebase';

firebase.initializeApp(config);

class App extends React.Component {
	render() {
		return (
			<div>

			</div>
		);
	}
}

export default App;