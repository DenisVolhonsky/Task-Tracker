import {usersDbRef, auth} from './firebase-config';

export const createUser = (email, password) => {
	auth
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
		const currentUser = {
	        id: user.uid,
	        email: user.email,
		};

    usersDbRef
        .child(currentUser.id)
        .set(currentUser);
    })
    // .catch(error => dispatch(createUserFail(error)));
};

export const signIn = (email, password) => {
	auth
    .signInWithEmailAndPassword(email, password)
    // .catch(error => dispatch(signInFail(error)));
};

export const signOut = () => {
	auth.signOut()
	// .catch(error => dispatch(signOutFail(error)));
};