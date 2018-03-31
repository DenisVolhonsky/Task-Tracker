import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const Posts = ({id, title, onTodoClick}) => ( // сразу деструктуризируем props
    <div className="posts">
        <h3><a className="posts__link" href="">{title}</a></h3>
        <span className="delete-btn" onClick={()=>onTodoClick(id)}></span>
    </div>
);

Posts.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Posts;

