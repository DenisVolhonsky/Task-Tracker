import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import garbage from './garbage.svg';
import star from './star.svg';
import done from './done.svg';

const Posts = ({id, title, onTodoClick}) => ( // сразу деструктуризируем props
    <div className="posts">

        <p>
        <a className="posts__link" href=""><img className = "done" src = {done} alt="" />{title}</a>
        <img className = "str" src = {star} alt="" />
        <img className = "garb" src = {garbage} alt="" onClick={()=>onTodoClick(id)}/>
        </p>

    </div>
);

Posts.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Posts;

