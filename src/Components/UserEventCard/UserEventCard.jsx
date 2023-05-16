import moment from "moment/moment";
import React from "react";

const UserEventCard = ({ eventCard,handleUserEventDelete }) => {
  const { img, event, date, _id } = eventCard;
  return (
    <div className="card p-6 md:card-side bg-base-100 shadow-xl">
      <img className="w-52 h-44" src={img} alt="Movie" />
      <div className="card-body">
        <h2 className="card-title">{event}</h2>
        <p className="font-bold">{moment(date).format("DD MMM, YYYY")}</p>
        <div className="card-actions md:justify-end">
          <button onClick={() => handleUserEventDelete(_id)} className="btn btn-primary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UserEventCard;
