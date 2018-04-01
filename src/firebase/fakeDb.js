import v4 from 'uuid/v4';

export const posts = [
  {
    id: v4(),
    text: 'Погулять',
    done: true,
    category: 'Карьера'
  },
  {
    id: v4(),
    text: 'Бухнуть',
    done: false,
    category: 'Досуг'
  },
  {
    id: v4(),
    text: 'Поспать',
    done: true,
    category: 'Здоровье'
  },
  {
    id: v4(),
    text: 'Поесть',
    done: false,
    category: 'Здоровье'
  },
  {
    id: v4(),
    text: 'Поработать',
    done: true,
    category: 'Семья'
  },
  {
    id: v4(),
    text: 'Похакатонить',
    done: false,
    category: 'Саморазвитие'
  },
];
