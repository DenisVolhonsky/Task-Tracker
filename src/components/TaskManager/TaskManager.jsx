import React from 'react';
import './style.css'
import Editor from "components/Editor/Editor";
import PostsList from "components/PostsList";

const TaskManager = ({ onAddTodo }) => (
    <div className="managerPlace">
        <Editor onFormSubmit={onAddTodo}/>
        <PostsList />
    </div>
);

export default TaskManager;