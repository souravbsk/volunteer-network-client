import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { img, title, _id } = event || {};
  return (
    <Link to={`/bookEvent/${_id}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
