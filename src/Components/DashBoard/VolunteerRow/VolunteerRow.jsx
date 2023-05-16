import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const VolunteerRow = ({volunteer,handleRemoveVolunteer}) => {
    const {_id,name,email,date,event} = volunteer || {};
  return (
    <tr>
      <td>
        <h2 className="font-bold">{name}</h2>
      </td>
      <td>
        <p className="font-medium">{email}</p>
      </td>
      <td>
        <p>{date}</p>
      </td>
      <td>
        <p>{event}</p>
      </td>
      <th>
        <button onClick={() => handleRemoveVolunteer(_id)} className="btn text-lg  bg-red-500 border-0">
          <FaTrashAlt></FaTrashAlt>
        </button>
      </th>
    </tr>
  );
};

export default VolunteerRow;
