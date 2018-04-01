import React from 'react';
import {getFakePosts} from 'firebase/postService.js';
import './style.css';
import Posts from 'components/Posts/Posts';

export default class PostsList extends React.Component {
  state = {
    allPosts: getFakePosts(),
  };

  render() {
    const {allPosts} = this.state;

    return (

      <div className="posts__body">
        {allPosts.map(post => <Posts onTodoClick={this.onDeleteTodo}
                                     key={post.id} {...post}/>)}
      </div>

    );
  }
};