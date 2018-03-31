import React from 'react';
import {Input} from 'react-materialize'
import {Row} from 'react-materialize'
import HabitIcon1 from './icons/semya.svg'
import HabitIcon2 from './icons/zdorovye.svg'
import HabitIcon3 from './icons/samorazv.svg'
import HabitIcon4 from './icons/dosug.svg'
import HabitIcon5 from './icons/okruzh.svg'
import HabitIcon6 from './icons/finansy.svg'
import HabitIcon7 from './icons/kariera.svg'
import HabitIcon8 from './icons/putesh.svg'

import Modal from 'react-modal';

import './Habit.css';



const Habit = () =>  {
	
		return(
		<div className = 'Habit'>

			<h5>Новая привычка</h5>
			

			<Row className = 'Habit_input'>
  <Input s={6} label="First Name" label=" Название" />
</Row>
		<div className = 'Icons'>
		<div icon_main>
		<img className = 'Habit_icon' src = {HabitIcon1} alt = '' />
		<p>Семья</p>
		</div>
		<div icon_main>
		<img className = 'Habit_icon' src = {HabitIcon2} alt = '' />
		<p>Здоровье</p>
		</div>
		<div icon_main>
		<img className = 'Habit_icon' src = {HabitIcon3} alt = '' />
		<p>Саморазвитие</p>
		</div>
		<div icon_main>
		<img className = 'Habit_icon' src = {HabitIcon4} alt = '' />
		<p>Досуг</p>
		</div>
		<div icon_main>
		<img className = 'Habit_icon' src = {HabitIcon5} alt = '' />
		<p>Окружение</p>
		</div>
		<div icon_main>
		<img className = 'Habit_icon' src = {HabitIcon6} alt = '' />
		<p>Финансы</p>
		</div>
		<div icon_main>
		<img className = 'Habit_icon' src = {HabitIcon7} alt = '' />
		<p>Карьера</p>
		</div>
		<div icon_main>
		<img className = 'Habit_icon' src = {HabitIcon8} alt = '' />
		<p>Путешествия</p>
		</div>
		</div>


						
		</div>
		)
	}

export default Habit;