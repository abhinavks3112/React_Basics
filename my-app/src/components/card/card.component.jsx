import React from 'react';
import './card.style.css';

export const Card = (props) => {
    return(
        <div className="card">
            <img alt="cats" src={`https://robohash.org/${props.user.id}?set=set4&size=180x180`} />
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>
        </div>
    );
}