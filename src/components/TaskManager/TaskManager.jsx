import React, { Component } from 'react';
import './style.css';
import Editor from 'components/Editor/Editor';
import PostsList from 'components/PostsList';

class TaskManager extends Component {
  render() {
    return (
      <div className="managerPlace">
        <Editor
          onExtendedTaskAdd={ this.props.onExtendedTaskAdd }
          onSimpleTaskAdd={ this.props.onSimpleTaskAdd }
        />
        <PostsList/>
      </div>
    );
  }
}

export default TaskManager;