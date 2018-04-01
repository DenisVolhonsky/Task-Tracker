import React from 'react';
import Important from 'components/LeftNav/Important';
import Today from 'components/LeftNav/Today';
import LifeContainer from 'components/LeftNav/LifeContainer/LifeContainer';
import './style.css';

const LeftNav = ({tasks, onCategoryChange}) => (
  <div className="LeftNav">
    <div className='category-list'>
      <div className="category-container"
           onClick={() => onCategoryChange('All')}>
        <a className="important_text">Все задачи</a>
      </div>
      <Important/>
      <Today/>
    </div>
    <LifeContainer tasks={tasks} onCategoryChange={onCategoryChange}/>
  </div>
);

export default LeftNav;