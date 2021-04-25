import React from 'react';
import './search-box.style.css';

/*
 Functional component received props and return some jsx
 Smaller, easier to test 
*/
export const SearchBox = ({placeholder, handleChange}) => {
    return(
        <input className="searchBox" type="search" placeholder={placeholder} onChange={handleChange}/>
    );

}