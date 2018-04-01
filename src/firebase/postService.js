import { posts } from './fakeDb';
import { tasksDbRef, auth } from './firebase-config';

// const userId = 'EIxUgcpjsafs3YUqiHACSclL6Gt1';

export const deleteTask = (category, noteId) => {
	tasksDbRef
	    // .child(`${auth.currentUser.uid}/${noteId}`)
	    .child(`${category}/${auth.currentUser.uid}/${noteId}`)
	    .remove()
	    .catch(error => console.log(error));
};

export const saveTask = (category, text, importance, date, comment) => {
	tasksDbRef
		.child(`${category}/${auth.currentUser.uid}`)
		// .child(`${category}/${auth.currentUser.uid}`)
		.push({
		    text: text,
		    userId: auth.currentUser.uid,
		    category: category,
		    importance: importance,
		    date: date,
		    comment: comment
		})
};

export const getFakePosts = () => posts;

// tasksDbRef.on('value', function(snap) {
// 	console.log(snap.val());
// });

// saveTask('sport', 'sheep');
// deleteTask('sport', '-L9-P9MXzGfRa_CnPJ1v');