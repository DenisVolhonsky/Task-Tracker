import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import './firebase/postService'


const root = document.querySelector('#root');

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, root);