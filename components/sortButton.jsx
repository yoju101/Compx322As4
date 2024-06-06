import React from 'react';
//the component gets the sortOrder as input
const SortButton = ({sortOrder}) =>{
    return (
        <div className='sortContainer'>
            {/* Button to sort in ascending order */}
        <button className="sort-button" onClick={() => sortOrder('asc')}>Sort asc</button>
        {/* Button to sort in descending  order */}
        <button className="sort-button1" onClick={() => sortOrder('desc')}>Sort desc</button>
        </div>
     
    
);
};
export default SortButton;