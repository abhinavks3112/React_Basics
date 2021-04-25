import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = (props) => {
    console.log(props);
    return(
        <div className='card-list'>
            {
                props.users.map((user) => (
                    // key attribute in map helps react to uniquely identify the particular instance that's changed and only re-render that and not others
                    <Card key={user.id}  user={user} ></Card>
                ))
            }
      </div>
    );
}