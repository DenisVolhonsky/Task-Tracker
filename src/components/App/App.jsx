import React from 'react';
import * as firebase from 'firebase';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import {auth} from 'firebase/firebase-config';
import { getFakePosts } from 'firebase/postService.js';
import Header from 'components/Header';
import AppBody from 'components/AppBody';
import Enter from "routes/Enter/Enter";
import PrivateRoute from "components/PrivateRoute";
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

    render() {
    	const {allPosts, isLoggedIn} = this.state;

        return (
            <div className="container">
                <Header/>
                <AppBody>
                   
                    <Switch>                       
                        <PrivateRoute
                            exact
                            path="/"
                            component={Enter}
                            isAuthenticated={!isLoggedIn}
                            redirectTo="/main"
                        />
                        <PrivateRoute
                            exact
                            path="/register"
                            component={Register}
                            isAuthenticated={!isLoggedIn}
                            redirectTo="/main"
                        />
                        <PrivateRoute
                            exact
                            path="/login"
                            component={SignIn}
                            isAuthenticated={!isLoggedIn}
                            redirectTo="/main"
                        />
                        <PrivateRoute
                            exact
                            path="/main"
                            component={MainPage}
                            isAuthenticated={isLoggedIn}
                            redirectTo="/"
                        />
                    </Switch>
                </AppBody>
            </div>
        );
    }
} 
// {isLoggedIn && (<Redirect to="/main" />) } 