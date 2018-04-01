import React from 'react';
import Important from 'components/LeftNav/Important';
import Today from 'components/LeftNav/Today';
import LifeContainer from 'components/LeftNav/LifeContainer/LifeContainer';
import './style.css';

const LeftNav = () => (
    <div className="LeftNav">
         <div className="allTasks">
        <a className="allTasks_text">Все&nbsp;задачи</a>
    </div>
        <Important/>
        <Today/>
        <LifeContainer/>
    </div>
);

export default LeftNav;