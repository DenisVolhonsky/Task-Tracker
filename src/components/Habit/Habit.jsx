import React from 'react';
import {Input} from 'react-materialize'
import {Row} from 'react-materialize'
import {Button} from 'react-materialize'
import HabitIcon1 from './icons/semya.svg'
import HabitIcon2 from './icons/zdorovye.svg'
import HabitIcon3 from './icons/samorazv.svg'
import HabitIcon4 from './icons/dosug.svg'
import HabitIcon5 from './icons/okruzh.svg'
import HabitIcon6 from './icons/finansy.svg'
import HabitIcon7 from './icons/kariera.svg'
import HabitIcon8 from './icons/putesh.svg'

// import Modal from 'react-modal';

import './Habit.css';


const Habit = () => {
    return (
        <div className='Habit'>
            <h5>Новая задача</h5>

            <Row className='Habit_input'>
                <Input className="Modal-input" s={6} placeholder=" Название"/>
            </Row>
            <div className='Icons'>
                <label>
                    <input className="Icon_input" type="radio" name="fb" value="small" />
                    <img className='Habit_icon' src={HabitIcon1} alt=''/>
                    <p>Семья</p>
                </label>
                <label>
                    <input className="Icon_input"  type="radio" name="fb" value="small" />
                    <img className='Habit_icon' src={HabitIcon2} alt=''/>
                    <p>Здоровье</p>
                </label>
                <label>
                    <input className="Icon_input"  type="radio" name="fb" value="small" />
                    <img className='Habit_icon' src={HabitIcon3} alt=''/>
                    <p>Саморазвитие</p>
                </label>
                <label>
                    <input className="Icon_input"  type="radio" name="fb" value="small" />
                    <img className='Habit_icon' src={HabitIcon4} alt=''/>
                    <p>Досуг</p>
                </label>
                <label>
                    <input className="Icon_input"  type="radio" name="fb" value="small" />
                    <img className='Habit_icon' src={HabitIcon5} alt=''/>
                    <p>Окружение</p>
                </label>
                <label>
                    <input className="Icon_input"  type="radio" name="fb" value="small" />
                    <img className='Habit_icon' src={HabitIcon6} alt=''/>
                    <p>Финансы</p>
                </label>
                <label>
                    <input className="Icon_input"  type="radio" name="fb" value="small" />
                    <img className='Habit_icon' src={HabitIcon7} alt=''/>
                    <p>Карьера</p>
                </label>
                <label>
                    <input className="Icon_input"  type="radio" name="fb" value="small" />
                    <img className='Habit_icon' src={HabitIcon8} alt=''/>
                    <p>Путешествия</p>
                </label>
            </div>

            <Row>
                <Input s={12} className="Modal-input" type='select' defaultValue='6'>
                    <option value='1'>самое важное</option>
                    <option value='2'>очень важное</option>
                    <option value='3'>важное</option>
                    <option value='4'>такое себе</option>
                    <option value='5'>неважное</option>
                    <option value='6' disabled='disabled'>важность</option>
                </Input>
            </Row>

            <Row>
                <Input className="Modal-input" name='on' type='date' placeholder='Время выполнения' onChange={function (e, value) {
                }}/>
            </Row>

            <Row>
                <Input className="Modal-input" s={6} placeholder='Комментарий'/>
            </Row>

            <div>
                <Button className='red' waves='light'>Сохранить</Button>

            </div>


        </div>
    )
}

export default Habit;




// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import v4 from 'uuid/v4';
// import './style.css';
//
// export default class Editor extends Component {
//     static propTypes = {
//         onFormSubmit: PropTypes.func.isRequired
//     }
//     constructor(){
//         super();
//         this.checkBox=[];
//     }
//
//     _HandleSubmit = event =>{
//         event.preventDefault();
//
//         const newPost = {
//             id: v4(),
//             title: this.inputTitle.value,
//             text: this.inputText.value,
//             rating:this.inputRating.value,
//             genre:[]
//         }
//
//         this.checkBox.map(item=>{
//             let checkGenre;
//             if(item.checked) {
//                 checkGenre = item.value;
//             }
//             return newPost.genre.push(checkGenre);
//         });
//
//         newPost.genre = newPost.genre.filter(el=>el !== undefined);
//
//         if(newPost.title==='' || newPost.text==='' || newPost.rating==='' || newPost.genre.length===0){
//             alert ('Нужно заполнить все поля формы!')
//             return;
//         }
//         else {
//             this.props.onFormSubmit(newPost);  // тоже что и onAddTodo(newPost)
//             this.form.reset();
//         }
//
//         console.log(newPost);
//     }
//
//     render() {
//
//         const optionsVal = [1,2,3,4,5,6,7,8,9,10];
//         const checkboxVal = ["фантастика","драма","приключения","мелодрама","семейный","вестерн","триллер","ужасы","комедия","боевик"];
//
//         return(
//             <div className="posts__adding">
//                 <form className="form" onSubmit={this._HandleSubmit} ref={node=>this.form=node}>
//                     <label className="all_labels" htmlFor="title">Введите название фильма:</label>
//                     <input type="text" className="form__title" tabIndex="1" autoFocus ref={node=>this.inputTitle=node}/>
//
//                     <label className="all_labels" htmlFor="text">Введите описание фильма:</label>
//                     <textarea className="form__text" cols="35" rows="10" tabIndex="2"  ref={(node=>this.inputText = node)}></textarea>
//
//                     <label className="all_labels" htmlFor="rate">Рейтинг фильма:</label>
//                     <select id="rate" className="form__rate" tabIndex="3" ref={node=>this.inputRating=node}>
//                         {optionsVal.map(option => <option key={option} value={option}>{option}</option>)}
//                     </select>
//
//                     <p className="all_labels">Выберите жанр фильма:</p>
//                     {checkboxVal.map((item, idx)=>
//                         <div className="form__genre" tabIndex="4" key={item}>
//                             <input type="checkbox" id={`g${idx}`} value={item} ref={node=>this.checkBox[idx]=node}/>
//                             <label htmlFor={`g${idx}`}>{item}</label>
//                         </div>
//                     )}
//
//                     <p className="form__note">* Вы можете выбрать несколько жанров.</p>
//                     <button className="form__submit" tabIndex="5">Добавить</button>
//                 </form>
//             </div>
//         );
//     }
// }