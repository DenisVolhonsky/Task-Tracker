import React from 'react';
import './style.css';

const LifeItem = ({ catItem, count }) => (
    <div className="LifeItem">
        <span className = "LifeItemName">{ catItem }</span>
        <span className = "LifeItemCount">{ count || 0 }</span>
    </div>
);

export default LifeItem;