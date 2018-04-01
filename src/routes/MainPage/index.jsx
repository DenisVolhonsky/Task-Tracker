import React from 'react';
import './style.css'; 
import LeftNav from "components/LeftNav";
import TaskManager from "components/TaskManager";

export default class MainPage extends React.Component {
	render() {
		return (
			<div className = "main_page">
				<LeftNav />
				<TaskManager />	
			</div>
		);
	}
};