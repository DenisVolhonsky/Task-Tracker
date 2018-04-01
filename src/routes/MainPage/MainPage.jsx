import React from 'react';
import './style.css';
import LeftNav from "components/LeftNav";
import TaskManager from "components/TaskManager/TaskManager";
import Habit from 'components/Habit/Habit';
import ModalHabit from 'components/Habit/ModalHabit';
import {tasksDbRef} from 'firebase/firebase-config';


// tasksDbRef.on('value', function(snap) {
// 	console.log(snap.val());
// });


class MainPage extends React.Component {
	state = {
        userTasks: {}
    };

    componentDidMount() {
    	tasksDbRef.on('value', (snap) => {
			// console.log(snap.val());

			this.setState({
				userTasks: snap.val()
			});
		});
		// this.setState({
		// 	userTasks: {a: 'b'}
		// });
}
    

	render() {
		// console.log(this.state.userTasks);
		const {userTasks} = this.state;

		return (
			<div>
				<div className="main">
				    <LeftNav userTasks={userTasks} />
				    <TaskManager/>
				</div>
		    	<Habit/>
		    	<ModalHabit/>
			</div>
		);
	}
};

export default MainPage;