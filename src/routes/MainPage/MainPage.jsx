import React, {Component} from 'react';
import './style.css';
import LeftNav from 'components/LeftNav';
import TaskManager from 'components/TaskManager/TaskManager';
import ModalHabit from 'components/Habit/ModalHabit';

const HABIT_MODAL = 'habit-modal';

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      activeModal: null
    };

  }

  openModal = (modalName) => {
    this.setState({
      activeModal: modalName
    });
  }

  closeModal = () => {
    console.log(this);

    this.setState({
      activeModal: null
    });
  }

  addTask(){

  }

  renderModal() {
    const { activeModal } = this.state;

    const modals = {
      [HABIT_MODAL]: <ModalHabit isOpen={activeModal === HABIT_MODAL} closeModal={this.closeModal} />
    };

    return modals[activeModal];
  }

  openTaskModal = () => {
    this.openModal(HABIT_MODAL);
  }

  render() {

    return (
      <div className="main">
        <LeftNav/>
        <TaskManager
          onExtendedTaskAdd={ this.openTaskModal }
          onSimpleTaskAdd={ this.addTask }
        />
        { this.renderModal() }
      </div>
    );
  }
}

export default MainPage;