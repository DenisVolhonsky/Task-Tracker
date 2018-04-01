import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import garbage from './garbage.svg';
import star from './star.svg';
import done from './done.svg';

const Posts = ({id, title, onTodoClick}) => (
  <div className="post-item">
    <a className="posts__link" href="">
      <img className="done" src={done} alt=""/>
    </a>
    <div className="post-item__container">
      <p className="post-item__text">{title}</p>
      <div className="post-item__info">
        <p className="post-item__time">13:55</p>
        <input
              className="star__item"
              type="checkbox"
              title="bookmark page"
            />
        <img className="garb" src={garbage} alt=""
             onClick={() => onTodoClick(id)}
        />
      </div>
    </div>
  </div>
);

Posts.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Posts;

