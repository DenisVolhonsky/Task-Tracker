import React, {Component} from 'react';
import v4 from 'uuid/v4';
import './style.css';
import {Helpers} from 'react-materialize';
import Icon14 from './icon-14.svg';

class Editor extends Component {

  state = {
    task: '',
  };
  _inputChange = event => {
    // console.log(event.target.value);
    this.setState({
      task: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const newPost = {
      id: v4(),
      title: this.state.task,
    };

    if (newPost.title === '') {
      alert('Нужно заполнить поле!');
      return;
    }

    this.props.onFormSubmit(newPost);
    this.form.reset();
    this.setState({
      task: '',
    });

    console.log(newPost);
  };

  render() {
    return (

      <div className="cart">
        <form
          className="cart_form"
          onSubmit={this.handleSubmit}
          ref={node => this.form = node}
        >
          <a className="btn-floating btn-small waves-effect waves-light red plus">
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
              title="bookmark page"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Editor;