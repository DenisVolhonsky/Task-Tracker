import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDfoHWlitxk7OEQYs-eyF_YkKGqm_Ji7sQ",
	authDomain: "task-tracker-c5e5e.firebaseapp.com",
	databaseURL: "https://task-tracker-c5e5e.firebaseio.com",
	projectId: "task-tracker-c5e5e",
	storageBucket: "",
	messagingSenderId: "1073341080880"
};

firebase.initializeApp(config);

const database = firebase.database().ref();
export const usersDbRef = database.child('users');
export const tasksDbRef = database.child('tasks');
export const auth = firebase.auth();

// // категория придет из формы после создания таска
// const category = 'health';
// const userId = auth.currentUser.uid;

// tasksDbRef.child(`${category}/${userId}`).push({
//     text: '11111'
// })