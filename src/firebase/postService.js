import { posts } from './fakeDb';
import {tasksDbRef,auth} from './firebase-config';

const userId = 'EIxUgcpjsafs3YUqiHACSclL6Gt1';

export const deleteTask = (category, noteId) => {
	tasksDbRef
	    // .child(`${auth.currentUser.uid}/${noteId}`)
	    .child(`${category}/${userId}/${noteId}`)
	    .remove()
	    .catch(error => console.log(error));
};

export const saveTask = (category, text) => {
	tasksDbRef
		.child(`${category}/${userId}`)
		// .child(`${category}/${auth.currentUser.uid}`)
		.push({
		    text: text,
		    // userId: auth.currentUser.uid,
		    category: category
		})
};

export const getFakePosts = () => posts;

saveTask('sport', 'sheep');
deleteTask('sport', '-L9-P9MXzGfRa_CnPJ1v');