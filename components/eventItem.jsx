import React from 'react';

// EventItem component receives event object and deleteItem function as props
const EventItem = ({ event, deleteItem }) => {

return(
    // Button to delete the event
    <button onClick={() => deleteItem(event.id)}>Delete </button>
)
}
export default EventItem;
