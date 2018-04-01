import React from 'react';
import './style.css'
import Editor from "components/Editor/Editor";
import PostsList from "components/PostsList";
import Habit from 'components/Habit/Habit';
import Modal_habit from 'components/Habit/Modal_habit';

const TaskManager = (props) => (
    <div className="posts">
        <Editor onFormSubmit={this.onAddTodo}/>
        <PostsList />
        <Habit/>
        <Modal_habit/>
    </div>
);

export default TaskManager;