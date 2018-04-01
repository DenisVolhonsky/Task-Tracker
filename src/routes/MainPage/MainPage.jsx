import React, {Component} from 'react';
import './style.css';
import LeftNav from 'components/LeftNav';
import TaskManager from 'components/TaskManager/TaskManager';
import ModalHabit from 'components/Habit/ModalHabit';
import {getFakePosts} from 'firebase/postService.js';

const HABIT_MODAL = 'habit-modal';

const getDefaultState = () => ({
  tasks: getFakePosts(),
  selectedTask: {
    id: null,
    comment: null,
    date: null,
    importance: null,
    text: null,
    done: false,
    category: null
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

  saveTaskAfterModal = (task) =>{
      this.addTask(task);
      this.closeModal();
  }

  renderModal() {
    const { activeModal, selectedTask } = this.state;

    const modals = {
      [HABIT_MODAL]: (
        <ModalHabit
          currentTask={ selectedTask }
          isOpen={activeModal === HABIT_MODAL}
          closeModal={this.closeModal}
          onPostAdd={ this.saveTaskAfterModal }
        />
      )
    };

    return modals[activeModal];
  }

  openTaskModal = (task) => {
    this.setState({
      selectedTask: { ...this.state.selectedTask, ...task }
    });
    this.openModal(HABIT_MODAL);
  }

  onPostDone = (changedItemId, isDone) => {
    const newTasks = this.state.tasks.map(
      (item) => {
        if(item.id === changedItemId) item.done = isDone;
        return item;
      }
    );

    this.setState({
      tasks: newTasks
    });
  }

  render() {

    return (
      <div className="main">
        <LeftNav/>
        <TaskManager
          tasks={this.state.tasks}
          onExtendedTaskAdd={ this.openTaskModal }
          onSimpleTaskAdd={ this.addTask }
          onPostDelete={this.deleteTask}
          onPostDone={ this.onPostDone }
        />
        { this.renderModal() }
      </div>
    );
  }
}

export default MainPage;