import React from 'react';
import Important from 'components/LeftNav/Important';
import Today from 'components/LeftNav/Today';
import LifeContainer from 'components/LeftNav/LifeContainer';
import './style.css';

const LeftNav = () => (
    <div className="LeftNav">
        <h1><a className="AllTasks" href="">Все задачи</a></h1>
        <Important/>
        <Today/>
        <LifeContainer/>
    </div>
);

export default LeftNav;