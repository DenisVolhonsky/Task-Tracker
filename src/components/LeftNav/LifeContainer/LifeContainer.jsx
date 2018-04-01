import React from 'react';
import './style.css';
import LifeItem from 'components/LeftNav/LifeContainer/LifeItem';

const categories = ['# Семья', '# Здоровье','# Саморазвитие','# Досуг','# Окружение','# Финансы','# Карьера','# Путешествия'];

const LifeContainer = ({userTasks}) => {
	console.log(userTasks);
	return (
    <div className="LifeContainer">
    {/*    {categories.map(item => <LifeItem key={item} catItem={item}/>)} */}
         {/*{userTasks.map(item => <LifeItem key={item} catItem={item}/>)}*/}

    </div>
)};
// console.log(this.props.userTasks);
export default LifeContainer;