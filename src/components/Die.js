import React from 'react';

import './Die.css';

const Die = (props) => {
    return (
        <div className="Die">
            <i className={`fas fa-dice-${props.num}`}></i>
        </div>
    );
};

export default Die;
