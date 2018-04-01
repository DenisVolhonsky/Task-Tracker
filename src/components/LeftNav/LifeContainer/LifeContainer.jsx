import React from 'react';
import './style.css';
import LifeItem from 'components/LeftNav/LifeContainer/LifeItem/LifeItem';

const categoriesNames = ['Семья', 'Здоровье','Саморазвитие','Досуг','Окружение','Финансы','Карьера','Путешествия'];

const getTasks = (name, tasks) => tasks.filter(({ text, category}) => {
  return category === name;
});

const LifeContainer = ({ tasks }) => {
  const categoriesData = {
    'Семья': {
      name: 'Семья',
      tasks: getTasks('Семья', tasks)
    },
    'Здоровье': {
      name: 'Здоровье',
      tasks: getTasks('Здоровье', tasks)
    },
    'Саморазвитие': {
      name: 'Саморазвитие',
      tasks: getTasks('Саморазвитие', tasks)
    },
    'Досуг': {
      name: 'Досуг',
      tasks: getTasks('Досуг', tasks)
    },
    'Окружение': {
      name: 'Окружение',
      tasks: getTasks('Окружение', tasks)
    },
    'Финансы': {
      name: 'Финансы',
      tasks: getTasks('Финансы', tasks)
    },
    'Карьера': {
      name: 'Карьера',
      tasks: getTasks('Карьера', tasks)
    },
    'Путешествия': {
      name: 'Путешествия',
      tasks: getTasks('Путешествия', tasks)
    },
  };

  return (
    <div className="LifeContainer">
      {
        categoriesNames.map(
          name => <LifeItem key={name} catItem={name} count={categoriesData[name].tasks.length}/>
        )
      }
    </div>
  );
}

export default LifeContainer;