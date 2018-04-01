import React from 'react';
import './style.css';

const LifeItem = ({ catItem, count, onCategoryChange }) => (
    <div className={`LifeItem ${ count === 0 ? 'LifeItem_empty' : '' }`} onClick={onCategoryChange}>
        <p className = "LifeItemName">{ catItem }</p>
        <p className = "LifeItemCount">{ count || 0 }</p>
    </div>
);

export default LifeItem;