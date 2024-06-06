import React from 'react';

//the component for the event list it takes in the event and delete item as inputs 
const eventList = ({events, deleteItem}) =>{
    return(
        
        <>
        <h3>List of Events</h3>
        <div>
        {/* Mapping through the events array to render each event */}
        {events && events.map(event => (
            <div key={event.id} className='event'>
                <li key={event.id}>
                    {/* ID: {event.id} */}
                    <p> Name: {event.name}</p>
                    <p>Description: {event.description}</p>  
                    <p>Start: {event.startdate}</p>  
                    <p>End: {event.enddate}</p> 
                    {/* {button to delete an item} */}
                <button onClick={() => deleteItem(event.id)}>Delete</button>
                </li>
        </div>
        ))}
        </div>
        </>
    );
};
export default eventList;