import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import garbage from './garbage.svg';
import star from './star.svg';
import done from './done.svg';

const PostItem = ({id, text, onDelete }) => (
  <div className="post-item">
    <a className="posts__link">
      &#10004;
    </a>
    <div className="post-item__container">
      <p className="post-item__text">{ text }</p>
      <div className="post-item__info">
        <p className="post-item__time">13:55</p>
        <input
              className="star__item"
              type="checkbox"
              title="bookmark page"
            />
        <img className="garb" src={garbage} alt=""
             onClick={() => onDelete(id)}
        />
      </div>
    </div>
  </div>
);

PostItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PostItem;

