import React from 'react';
import './style.css';
import LifeItem from 'components/LeftNav/LifeContainer/LifeItem';

const categories = ['Семья', 'Здоровье','Саморазвитие','Досуг','Окружение','Финансы','Карьера','путешествия'];

const LifeContainer = () => (
    <div className="LifeContainer">
        {categories.map(item => <LifeItem key={item} catItem={item}/>)}
    </div>
);

export default LifeContainer;