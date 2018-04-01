import React, { Component } from 'react';
import {RadioGroup, Radio} from 'react-radio-group';
import {Input} from 'react-materialize';
import {Row} from 'react-materialize';
import {Button} from 'react-materialize';
import HabitIcon1 from './icons/semya.svg';
import HabitIcon2 from './icons/zdorovye.svg';
import HabitIcon3 from './icons/samorazv.svg';
import HabitIcon4 from './icons/dosug.svg';
import HabitIcon5 from './icons/okruzh.svg';
import HabitIcon6 from './icons/finansy.svg';
import HabitIcon7 from './icons/kariera.svg';
import HabitIcon8 from './icons/putesh.svg';

import './Habit.css';

class Habit extends Component {
  state = {
    category: '',
    importance: '',
    date: '',
    comment: '',
    text: ''
  }

  componentDidMount(){
    this.setState(
      state => {
        return {...state, ...this.props.currentTask}
      }
    )
  }

  handleChangeRadio = evt => {
    this.setState({
      category: evt.target.value,
    });
  }

  handleSubmit = evt => {
    this.setState({
      text: evt.target.value,
    });
  }

  handleChangeSelect = evt => {
    this.setState({
      importance: evt.target.value,
    });
  }

  handleChangeComment = evt => {
    this.setState({
      comment: evt.target.value,
    });
  }

  onSubmit = () => {
    this.props.onPostAdd(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div className='Habit'>
        <h5>Новая задача</h5>
        <Row className='habit-input'>
          <Input
            className="modal-input"
            s={12}
            placeholder=" Название"
            value={this.state.text}
            onChange={this.handleSubmit}
          />
        </Row>
        <RadioGroup
          name="habits" className='Icons'
          selectedValue={this.state.category || ''}>
          <label>
            <Radio value="family" onChange={this.handleChangeRadio}/>
            <img className='Habit_icon Habit_click' src={HabitIcon1} alt=''/>
            <p className = 'hab_name'>Семья</p>
          </label>
          <label>
            <Radio value="health" onChange={this.handleChangeRadio}/>
            <img className='Habit_icon Habit_click' src={HabitIcon2} alt=''/>
            <p className = 'hab_name'>Здоровье</p>
          </label>
          <label>
            <Radio value="develop" onChange={this.handleChangeRadio}/>
            <img className='Habit_icon Habit_click' src={HabitIcon3} alt=''/>
            <p className = 'hab_name'>Саморазвитие</p>
          </label>
          <label>
            <Radio value="rest" onChange={this.handleChangeRadio}/>
            <img className='Habit_icon Habit_click' src={HabitIcon4} alt=''/>
            <p className = 'hab_name'>Досуг</p>
          </label>
          <label>
            <Radio value="environment" onChange={this.handleChangeRadio}/>
            <img className='Habit_icon Habit_click' src={HabitIcon5} alt=''/>
            <p className = 'hab_name'>Окружение</p>
          </label>
          <label>
            <Radio value="finance" onChange={this.handleChangeRadio}/>
            <img className='Habit_icon Habit_click' src={HabitIcon6} alt=''/>
            <p className = 'hab_name'>Финансы</p>
          </label>
          <label>
            <Radio value="carrier" onChange={this.handleChangeRadio}/>
            <img className='Habit_icon Habit_click' src={HabitIcon7} alt=''/>
            <p className = 'hab_name'>Карьера</p>
          </label>
          <label>
            <Radio value="travel" onChange={this.handleChangeRadio}/>
            <img className='Habit_icon Habit_click' src={HabitIcon8} alt=''/>
            <p className = 'hab_name'>Путешествия</p>
          </label>
        </RadioGroup>
        <Row>
          <Input
            s={12} className="modal-input" type='select'
            defaultValue={this.state.importance}
            value={this.state.importance}
            onChange={this.handleChangeSelect}
          >
            <option value='самое важное'>самое важное</option>
            <option value='очень важное'>очень важное</option>
            <option value='важное'>важное</option>
            <option value='такое себе'>такое себе</option>
            <option value='неважное'>неважное</option>
          </Input>
        </Row>
        <Row>
          <Input
            className="modal-input"
            name='on' type='date'
            placeholder='Время выполнения'
            value={this.state.date || ''}
            onChange={(e, value) => this.setState({ date: value })}
          />
        </Row>
        <Row>
          <Input className="modal-input" s={6} placeholder='Комментарий'
                 onChange={this.handleChangeComment}/>
        </Row>
        <div>
          <Button className='red' waves='light' onClick={this.onSubmit}>Сохранить</Button>
        </div>
      </div>
    );
  }
}

export default Habit;

