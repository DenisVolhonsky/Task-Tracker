import React from 'react';
import './App.css';
import Header from 'components/Header';
import Habit from 'components/Habit/Habit';
import Modal_habit from 'components/Habit/Modal_habit';
import Posts from 'components/Posts';
import { getFakePosts } from '../../firebase/postService.js';
import Auth from "components/Auth/Auth";
import {auth} from '../../firebase/firebase-config';
import Editor from "components/Editor";
import LeftNav from "components/LeftNav";
import SignIn from 'components/SignIn';
import Register from 'components/Register';
import Enter from "../Enter/Enter";

const getDefaultState = () => ({
    allPosts: getFakePosts(),
    user: {
    	name: null,
    	id: null
    },
    isLoggedIn: false,
    userId: null,
});

export default class App extends React.Component {
    state = getDefaultState();
    
    componentWillMount = () => {
        auth.onAuthStateChanged(user => {
            if (user) {
              console.log('user login');
              console.log(auth.currentUser.uid);
              this.setState({
                isLoggedIn:true,
                userId: auth.currentUser.uid
              });
            } else {
              console.log('user logout');
              this.setState({
                isLoggedIn:false,
                userId: null
              });
            }
          });
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
    	const {allPosts} = this.state;
        return (
            <div className="container">
                <Header/>
                <LeftNav/>
                <div className="posts__container">
                    <div className="posts__body">
                        {allPosts.map(post => <Posts onTodoClick={this.onDeleteTodo} key={post.id} {...post}/>)}  

                        <Modal_habit/>
                    </div>
                    <Editor onFormSubmit={this.onAddTodo}/>
                </div>
                <Auth />
                <SignIn/>
                <Register/>
                <Enter/>
            </div>
        );
    }
}