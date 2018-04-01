import React from 'react';
import Important from 'components/LeftNav/Important';
import Today from 'components/LeftNav/Today';
import LifeContainer from 'components/LeftNav/LifeContainer/LifeContainer';
import './style.css';

const LeftNav = ({family, health, development, entertainment, environment, finance, career, travel}) => (
    <div className="LeftNav">
        <div className="allTasks">
        <p className="allTasks_text"><a href="">Все&nbsp;задачи</a></p>
    </div>
        <Important/>
        <Today/>
        <LifeContainer family={family} health={health} development={development} entertainment={entertainment} environment={environment} finance={finance} career={career} travel={travel} />
    </div>
);

export default LeftNav;