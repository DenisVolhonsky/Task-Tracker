import React from 'react';
import {getFakePosts} from 'firebase/postService.js';
import './style.css';
import PostItem from 'components/Post/Post';

const PostsList = ({ posts, onDeleteTodo, onDone, activeCategory }) => (
  <div className="posts__body">
    {
      posts.map((post) =>
        <PostItem activeCategory={activeCategory} onDone={onDone} onDelete={ onDeleteTodo } key={post.id} { ...post } />
      )
    }
  </div>
);

export default PostsList;