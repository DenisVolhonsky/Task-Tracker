import React from 'react';
import Modal from 'react-modal';
import {Input} from 'react-materialize'
import {Row} from 'react-materialize'
import HabitIcon1 from './icons/semya.svg'
import HabitIcon2 from './icons/zdorovye.svg'
import HabitIcon3 from './icons/samorazv.svg'
import HabitIcon4 from './icons/dosug.svg'
import HabitIcon5 from './icons/okruzh.svg'
import HabitIcon6 from './icons/finansy.svg'
import HabitIcon7 from './icons/kariera.svg'
import HabitIcon8 from './icons/putesh.svg'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class Modal_habit extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <button onClick={this.closeModal}>close</button>
          
          
        </Modal>
      </div>
    );
  }
}
export default Modal_habit;