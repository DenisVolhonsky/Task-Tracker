import React from 'react';
import './style.css';

const LifeItem = ({catItem}) => (
    <div className="LifeItem">
        <span className = "LifeItemName"><a href = "">{catItem}</a></span>
        <span className = "LifeItemCount">1</span>
    </div>
);

export default LifeItem;