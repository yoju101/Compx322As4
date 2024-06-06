import React, { useState } from "react";

const addEventForm = ({ addEvent }) => {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Calls addEvent function with form data
    addEvent({ name, description, startdate, enddate });
    //resets the form 
    setName("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
         {/* Container for form fields */}
      <div className="form-container">
        {/* Input field for events */}
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Updates the state on input change
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="date"
            value={startdate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            value={enddate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
         {/* Submit button for adding event */}
        <button type="submit">Add Event</button>
      </div>
    </form>
  );
};
export default addEventForm;
