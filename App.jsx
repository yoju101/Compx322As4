import { useState, useEffect } from "react"; // Importing necessary hooks from React
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios"; // Importing axios for making HTTP requests
import EventList from "./components/eventList";
import EventItem from "./components/eventItem";
import SearchBar from "./components/searchBar";
import AddEventForm from "./components/addEventForm";
import SortButton from "./components/sortButton";
import "./App.css";

function App() {
  // State to hold the list of events
  const [events, setEvents] = useState([]);
  // State to hold the search query
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isFormVisible, setIsFormVisible] = useState(false);

  //this gets the data from the api and return the data
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/events"); //getting the data from the api
        console.log(response);
        setEvents(response.data);
      } catch (error) {
        console.log("Error when fetching the API", error); //error checking
      }
    };
    getData();
  }, []);

  //get the id of the event and deleting that event from the database
  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:3000/events/${id}`)
      .then(() => setEvents(events.filter((event) => event.id !== id)))
      .catch((error) => console.error(error));
  };

  //get the input for a new event and updating the database
  const addEvent = (event) => {
    axios
      .post("http://localhost:3000/events", event)
      .then((response) => setEvents([...events, response.data]))
      .catch((error) => console.error(error));
  };
  //filtering all the events based on the search input
  const filter = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );
  //sorting the input by date
  const sortDate = (order) => {
    setSortOrder(order);
    const sortEvents = [...events].sort((a, b) => {
      if (order == "asc") {
        return a.startdate.toLowerCase().localeCompare(b.enddate.toLowerCase());
      } else {
        return b.enddate.toLowerCase().localeCompare(a.startdate.toLowerCase());
      }
    });

    setEvents(sortEvents);
  };
  //sets the add event form is Visibale or not
  const formVisibale = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <h1>Event Manager</h1>
      <SearchBar setSearch={setSearch} />
      <SortButton sortOrder={sortDate} />
      <div className="addEventButton">
        <button onClick={formVisibale}>
          {isFormVisible ? "Hide Form" : "Add Event"}
        </button>

        {isFormVisible && <AddEventForm addEvent={addEvent} />}
      </div>
      {/* <AddEventForm addEvent={addEvent}/> */}
      <EventList events={filter} deleteItem={deleteItem} />
    </>
  );
}

export default App;
