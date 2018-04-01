import React from 'react';
import {getFakePosts} from 'firebase/postService.js';
import './style.css';
import Post from 'components/Post/Post';

const PostsList = ({ posts, onDeleteTodo }) => (
  <div className="posts__body">
    {
      posts.map((post) =>
        <Post onDelete={ onDeleteTodo } { ...post } />
      )
    }
  </div>
);

export default PostsList;