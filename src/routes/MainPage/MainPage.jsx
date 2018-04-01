import React, {Component} from 'react';
import './style.css';
import LeftNav from 'components/LeftNav';
import TaskManager from 'components/TaskManager/TaskManager';
import ModalHabit from 'components/Habit/ModalHabit';
import {getFakePosts} from 'firebase/postService.js';
import {tasksDbRef, auth} from 'firebase/firebase-config.js';


const HABIT_MODAL = 'habit-modal';

const getDefaultState = () => ({
  tasks: getFakePosts(),
  family: [],
  health: [],
  development: [],
  entertainment: [],
  environment: [],
  finance: [],
  career: [],
  travel: [],
  selectedTask: {
    comment: null,
    date: null,
    importance: null,
    selectedValue: null,
    text: null
  },
  user: {
    name: null,
    id: null,
  },
  activeModal: null
});


class MainPage extends Component {
  constructor() {
    super();

    this.state = getDefaultState();
  }

  componentDidMount() {
    tasksDbRef.child('sport').child(auth.currentUser.uid).on('child_added', snap => {
    
    console.log(snap.val());

      this.setState({
        tasks: [...this.state.tasks, snap.val()]
      });
      this.setState({
        health: [...this.state.health, snap.val()]
      });
    });
    // this.setState({
    //     tasks: this.state.tasks.concat(this.state.health)
    // });
  }

  openModal = (modalName) => {
    this.setState({
      activeModal: modalName
    });
  }

  closeModal = () => {
    this.setState({ activeModal: null });
  }

  addTask = todo => {
    this.setState({
      tasks: [...this.state.tasks, todo],
      selectedTask: null
    });
  }

  deleteTask = id => {
    this.setState({
      tasks: this.state.tasks.filter(post => post.id !== id )
    });
  }

  renderModal() {
    const { activeModal, selectedTask } = this.state;

    const modals = {
      [HABIT_MODAL]: (
        <ModalHabit
          taskToEdit={ selectedTask }
          isOpen={activeModal === HABIT_MODAL}
          closeModal={this.closeModal}
          onPostAdd={ (task) => {
            this.addTask(task);
            this.closeModal();
          }}
        />
      )
    };

    return modals[activeModal];
  }

  openTaskModal = () => {
    this.openModal(HABIT_MODAL);
  }

  render() {
    const { family, health, development, entertainment, environment, finance, career, travel } = this.state;
    console.log(this.state.tasks);

    return (
      <div className="main">
        <LeftNav family={family} health={health} development={development} entertainment={entertainment} environment={environment} finance={finance} career={career} travel={travel} />
        <TaskManager
          tasks={this.state.tasks}
          onExtendedTaskAdd={ this.openTaskModal }
          onSimpleTaskAdd={ this.addTask }
          onPostDelete={this.deleteTask}
        />
        { this.renderModal() }
      </div>
    );
  }
}

export default MainPage;