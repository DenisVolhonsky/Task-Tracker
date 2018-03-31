import React from 'react';
import './Auth.css';
import { createUser, signIn, signOut } from '../../firebase/authService';


export default class Auth extends React.Component {
    state = {
        email: '',
        password: '',
    };

    handleInputChange = evt => {
        const value = evt.target.value;
        const type = evt.target.type;

        this.setState({ [type]: value });
    };

    handleCreateUser = evt => {
        const { email, password } = this.state;
        evt.preventDefault();
        createUser(email, password);
    };

    handleSignInUser = evt => {
        const { email, password } = this.state;
        evt.preventDefault();
    };


    render() {
    	const {email, password} = this.state;

        return (
            <form>
                <input
                    type="email"
                    value={email}
                    onChange={this.handleInputChange}
                    placeholder="Email"
                    required
                    autoFocus
                />
                <input
                    type="password"
                    value={password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                    required
                />
                <div >
                    <button onClick={this.handleCreateUser}>
                    Sign Up
                    </button>
                    OR
                    <button onClick={this.handleSignInUser}>
                    Log In
                    </button>
                </div>
            </form>
        );
    }
}