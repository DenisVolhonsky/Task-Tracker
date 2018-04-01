import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import garbage from './garbage.svg';
import star from './star.svg';
import done from './done.svg';

const PostItem = ({id, text, onDelete }) => (
  <div className="post-item">
    <a className="posts__link" href="">
       &#10004;
    </a>
    <div className="post-item__container">
      <p className="post-item__text">{ text }</p>
      <div className="post-item__info">
        <p className="post-item__time">13:55</p>
        <img className="str" src={star} alt=""/>
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




// const Posts = ({id, title, onTodoClick}) => (
//   <div className="post-item">
//     <a className="posts__link" href="">
//       &#10004;
//     </a>
//     <div className="post-item__container">
//       <p className="post-item__text">{title}</p>
//       <div className="post-item__info">
//         <p className="post-item__time">13:55</p>
//         <img className="str" src={star} alt=""/>
//         <img className="garb" src={garbage} alt=""
//              onClick={() => onTodoClick(id)}
//         />
//       </div>
//     </div>
//   </div>
// );

// Posts.propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default Posts;