import React, { useEffect, useState } from "react";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import VolunteerRow from "../VolunteerRow/VolunteerRow";
import Swal from "sweetalert2";

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/volunteerList")
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);

  const handleRemoveVolunteer = (_id) => {
    fetch(`http://localhost:5000/volunteerList/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.deletedCount > 0) {
              const remainData = volunteers.filter(volunteer => volunteer._id !== _id);
              setVolunteers(remainData)
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              
            }
          }
        });
      });
  };
  return (
    <div>
      <h2 className="py-6 text-xl bg-white ps-9 font-semibold">
        Volunteer register list
      </h2>
      <div className="p-12">
        <div className="overflow-x-auto w-full">
          <div className="p-5 bg-white rounded-md">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Registering date</th>
                  <th>Volunteer list</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {volunteers?.map((volunteer) => (
                  <VolunteerRow
                    handleRemoveVolunteer={handleRemoveVolunteer}
                    key={volunteer._id}
                    volunteer={volunteer}
                  ></VolunteerRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerList;
