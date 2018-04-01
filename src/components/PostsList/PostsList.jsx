import React from 'react';
import {getFakePosts} from 'firebase/postService.js';
import './style.css';
import Post from 'components/Post/Post';

const PostsList = ({ posts, onDeleteTodo, onDone }) => (
  <div className="posts__body">
    {
      posts.map((post) =>
        <Post onDone={onDone} onDelete={ onDeleteTodo } key={post.id} { ...post } />
      )
    }
  </div>
);

export default PostsList;