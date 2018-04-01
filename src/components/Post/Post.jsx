import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import garbage from './garbage.svg';
import star from './star.svg';
import done from './done.svg';

const isHidden = (activeCategory, itemCategory) => {
  if (activeCategory === 'All') return false;

  return activeCategory !== itemCategory;
};

const PostItem = ({ id, text, onDelete, onDone, done, category, activeCategory, date }) => (
  <div className={`post-item ${isHidden(activeCategory, category) ? 'post-item_hidden' : ''}`}>
    <a className={`posts__link ${ done ? 'posts__link_active' : ''}`} onClick={() => onDone(id, !done)}>
      &#10004;
    </a>
    <div className="post-item__container">
      <p className="post-item__text">{ text }</p>
      <div className="post-item__info">
        <p className="post-item__time">{ date }</p>
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

