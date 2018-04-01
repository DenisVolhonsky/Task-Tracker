import React from 'react';
import './style.css';

const LifeItem = ({catItem}) => (
    <div className="LifeItem">
        <span className = "LifeItemName">{catItem}</span>
        <span className = "LifeItemCount">1</span>
    </div>
);

export default LifeItem;