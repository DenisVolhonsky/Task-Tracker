import React, {Component} from 'react';
import v4 from 'uuid/v4';
import './style.css';
import {Helpers} from 'react-materialize';
import Icon14 from './icon-14.svg';
import {Input} from 'react-materialize';
import {Row} from 'react-materialize';

class Editor extends Component {

  state = {
    task: '',
  };

  _inputChange = event => {
    this.setState({
      task: event.target.value,
    });
  };

  addTask = (event, withModal) => {
    event.preventDefault();
    const newPost = {
      id: v4(),
      text: this.state.task,
      date: Date.now() // should be formatted
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
      task: '',
    });

    console.log(newPost);
  };

  addTaskWithForm = (e) => {
    const openWithModal = true;

    this.addTask(e, openWithModal);
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

              <Input className="celendar-btn" name='on' type='date' onChange={(e, value) => {}}></Input>
              <img className="celendar" src={Icon14} alt=""/>

            <input
              className="star"
              type="checkbox"
              text="bookmark page"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Editor;