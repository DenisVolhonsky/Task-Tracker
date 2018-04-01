import React from 'react';
import * as firebase from 'firebase';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import {auth} from 'firebase/firebase-config';
import { getFakePosts } from 'firebase/postService.js';
import Header from 'components/Header';
import AppBody from 'components/AppBody';
import Enter from "routes/Enter/Enter";
import SignIn from 'routes/SignIn';
import Register from 'routes/Register';
import MainPage from 'routes/MainPage';

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


    // onAddTodo = todo => {
    //     this.setState({
    //         allPosts: [...this.state.allPosts, todo]
    //     });
    // }

    // onDeleteTodo = id => {
    //     this.setState({
    //        allPosts: this.state.allPosts.filter(post => post.id !== id )
    //     });
    // }

    render() {
    	const {allPosts} = this.state;

        return (
            <div className="container">
                <Header/>
                <AppBody>
                    <Switch>
                        <Route exact path="/" component={Enter} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={SignIn} /> 
                        <Route path="/main" render={() => <MainPage />} /> 
                        <Redirect to="/" />
                    </Switch>
                </AppBody>

            {/*     <LeftNav/>
                <div className="posts__container">
                    <div className="posts__body">
                        {allPosts.map(post => <Posts onTodoClick={this.onDeleteTodo} key={post.id} {...post}/>)}  
                        <Habit/>
                        <Modal_habit/>
                    </div>
                    <Editor onFormSubmit={this.onAddTodo}/>
                </div> */}  
            </div>
        );
    }
}