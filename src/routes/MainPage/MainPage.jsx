import React from 'react';
import './style.css';
import LeftNav from "components/LeftNav";
import TaskManager from "components/TaskManager/TaskManager";
import Habit from 'components/Habit/Habit';
import ModalHabit from 'components/Habit/ModalHabit';

const MainPage = () => (
  <div>
  <div className="main">
    <LeftNav />
    <TaskManager

    />
  </div>
    <Habit/>
    <ModalHabit/>
  </div>
);

export default MainPage;