import React, {Component} from 'react';
import v4 from 'uuid/v4';
import './style.css';

export default class Editor extends Component {
    state = {
        task:''
    };

    _inputChange = event => {
       // console.log(event.target.value);
        this.setState ({
           task: event.target.value
        });
    }

    _HandleSubmit = event => {
        event.preventDefault();

        const newPost = {
            id: v4(),
            title: this.state.task
        }

        if(newPost.title===''){
            alert ('Нужно заполнить поле!')
            return;
        }
        else {
            this.props.onFormSubmit(newPost);  // тоже что и onAddTodo(newPost)
            this.form.reset();
            this.setState ({
                task: '',
            });

        }

        console.log(newPost);
    }

    render() {
        return(
            <div className="posts__adding">
                <form className="form" onSubmit={this._HandleSubmit} ref={node=>this.form=node}>
                    <input type="text" className="form__title" tabIndex="1" autoFocus onChange={this._inputChange}/>
                </form>
            </div>
        );
    }
}



