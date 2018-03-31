import React, {Component} from 'react';
import v4 from 'uuid/v4';
import './style.css';

export default class Editor extends Component {

    _HandleSubmit = event => {
        event.preventDefault();

        const newPost = {
            id: v4(),
            title: this.inputTitle.value,
        }

        if(newPost.title===''){
            alert ('Нужно заполнить поле!')
            return;
        }
        else {
            this.props.onFormSubmit(newPost);  // тоже что и onAddTodo(newPost)
            this.form.reset();
        }

        console.log(newPost);
    }

    render() {
        return(
            <div className="posts__adding">
                <form className="form" onSubmit={this._HandleSubmit} ref={node=>this.form=node}>
                    <input type="text" className="form__title" tabIndex="1" autoFocus ref={node=>this.inputTitle=node}/>
                    <button className="form__submit" tabIndex="2">Добавить</button>
                </form>
            </div>
        );
    }
}



