import {usersDbRef, auth} from './firebase-config';

export const createUser = (name, email, password) => {
	auth
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
		const currentUser = {
            name: name,
	        id: user.uid,
	        email: user.email,
		};

    usersDbRef
        .child(currentUser.id)
        .set(currentUser);
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
    });
};

export const signIn = (email, password) => {
	auth
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
    });
};

export const signOut = () => {
	auth.signOut()
	.catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
    });
};