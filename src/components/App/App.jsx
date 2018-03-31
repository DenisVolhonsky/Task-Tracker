import React from 'react';
import './App.css';
import Header from 'components/Header';
import Posts from 'components/Posts';
import posts from 'db.js';
import Editor from "../Editor/index";
import SignIn from 'components/SignIn';
import Register from 'components/Register';

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
                <SignIn/>
                <Register/>
            </div>
        );
    }
}