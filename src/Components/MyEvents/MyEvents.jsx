import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UserEventCard from "../UserEventCard/UserEventCard";
import Swal from "sweetalert2";

const MyEvents = () => {
  const { user, } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  const url = `http://localhost:5000/userEvents?email=${user?.email}`
  useEffect(() => {
    fetch(url,{
        method:"GET",
        headers:{
            authorization: `Bearer ${localStorage.getItem('volunteer-access-token')}`
        }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error) {
          setEvents(data);
        }
        else{
          logOut()
        }
      });
  }, [url]);



  const handleUserEventDelete = (id) => {
    fetch(`http://localhost:5000/userEvents/${id}`,{
        method:"DELETE"
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
              const remainData = events.filter(event => event._id !== id);
              setEvents(remainData)
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              
            }
          }
        });
      });

      

  }

  return (
    <div className="container mt-44">
      <div className="grid  md:grid-cols-2 gap-8">
        {events.map((eventCard) => (<UserEventCard handleUserEventDelete={handleUserEventDelete} key={eventCard._id} eventCard={eventCard}></UserEventCard>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
