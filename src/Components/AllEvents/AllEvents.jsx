import React, { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);


  const handleSearch = e => {
    e.preventDefault();

    const searchText = e.target.search.value;
    console.log(searchText);
    fetch(`http://localhost:5000/search/${searchText}`)
    .then(res => res.json())
    .then(data => {
      setEvents(data);
    })



  }
  return (
    <div>
      <div>
        <div className="form-control items-center">
          <h2 className="text-xl text-center md:text-4xl mb-8 font-semibold">
            I grow by helping people in need.
          </h2>
          <div>
            <form onSubmit={handleSearch} className="input-group">
              <input
                type="text"
                name="search"
                placeholder="search..."
                className="input input-bordered"
              />
              <input
                className="btn bg-blue-600 px-6"
                type="submit"
                value="Search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="grid gap-8 mt-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {events.map((event) => (
          <EventCard key={event._id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
