import React, {Component} from 'react';
import v4 from 'uuid/v4';
import './style.css';
import {Helpers} from 'react-materialize';
import Icon14 from './icon-14.svg';

class Editor extends Component {

  state = {
    text: '',
    importance: null
  };

  _inputChange = event => {
    this.setState({
      text: event.target.value,
    });
  };

  addTask = (event, withModal) => {
    event.preventDefault();
    const newPost = {
      id: v4(),
      text: this.state.text,
      date: Date.now(), // should be formatted,
      importance: this.state.importance || 'неважное'
    };

    if (newPost.title === '') {
      alert('Нужно заполнить поле!');
      return;
    }

    if (withModal) {
      this.props.onExtendedTaskAdd(newPost);
    } else {
      this.props.onSimpleTaskAdd(newPost);
    }

    this.form.reset();

    this.setState({
      text: '',
      importance: null
    });

    console.log(newPost);
  };

  addTaskWithForm = (e) => {
    const openWithModal = true;

    this.addTask(e, openWithModal);
  }

  onStarButtonClick = () => {
    if (this.state.importance) {
      this.setState({
        importance: 'неважное'
      });
      return;
    }
    this.setState({
      importance: 'важное'
    });
  }

  render() {

    return (
      <div className="cart">
        <form
          className="cart_form"
          onSubmit={this.addTask}
          ref={node => this.form = node}
        >
          <a
            className="btn-floating btn-small waves-effect waves-light red plus"
            onClick={ this.addTaskWithForm }
          >
            <i className="material-icons">add</i>
          </a>

          <input type="text" className="add-task" placeholder="Добавить задачу"
                 tabIndex="1" autoFocus onChange={this._inputChange}
          />
          <div className="cart-form__controls">
            <button className="celendar-btn">
              <img className="celendar" src={Icon14} alt=""/>
            </button>
            <input
              className="star"
              type="checkbox"
              text="bookmark page"
              onClick={this.onStarButtonClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Editor;