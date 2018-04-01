import React from 'react';
import Important from 'components/LeftNav/Important';
import Today from 'components/LeftNav/Today';
import LifeContainer from 'components/LeftNav/LifeContainer/LifeContainer';
import './style.css';

const LeftNav = ({ tasks, onCategoryChange}) => (
    <div className="LeftNav">
        <div className="allTasks" onClick={() => onCategoryChange('All')}>
        <a className="allTasks_text">Все&nbsp;задачи</a>
    </div>
        <Important/>
        <Today/>
        <LifeContainer tasks={tasks} onCategoryChange={onCategoryChange}/>
    </div>
);

export default LeftNav;