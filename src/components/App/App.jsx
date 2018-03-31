import React from 'react';
import * as firebase from 'firebase';
import './App.css';
import config from '../../firebase/firebase';
import Header from 'components/Header';
import Posts from 'components/Posts';
import posts from 'db.js';
import Editor from "components/Editor";
import LeftNav from "components/LeftNav";


firebase.initializeApp(config);

export default class App extends React.Component {

    state = {
        allPosts: posts
    }

    onAddTodo = todo => {
        this.setState({
            allPosts: [...this.state.allPosts, todo]
        });
    }

    onDeleteTodo = id => {
        this.setState({
           allPosts: this.state.allPosts.filter(post => post.id !== id )
        });
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <LeftNav/>
                <div className="posts__container">
                    <div className="posts__body">
                        {this.state.allPosts.map(post => <Posts onTodoClick={this.onDeleteTodo} key={post.id} {...post}/>)}
                    </div>
                    <Editor onFormSubmit={this.onAddTodo}/>
                </div>
            </div>
        );
    }
}