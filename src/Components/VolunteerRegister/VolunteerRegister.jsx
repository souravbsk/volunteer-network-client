import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const VolunteerRegister = () => {
    const {user} = useContext(AuthContext)
    const eventData = useLoaderData();

    const {_id,taskId,title,img,} = eventData;

    const handleEventBook = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const description = form.description.value;
        const  event = form.event.value;
        const newVolunteer = {
            name,
            email,
            date,
            description,
            event,
            img,
            taskId,
         }
         console.log(newVolunteer);

        //  booking event 
        fetch("http://localhost:5000/eventsBook",{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body: JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Register success',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        

    }

  return (
    <div className="md:container md:px-0 px-3">
      <div className="max-w-full md:w-6/12 border-2 mx-auto  rounded-md">
        <div className="card">
          <div className="card-body">
            <h1 className="text-xl md:text-2xl font-bold">Register as a Volunteer</h1>
            <form onSubmit={handleEventBook}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                name="name"
                  type="text"
                  placeholder="fullName"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                name="date"
                  type="date"
                  placeholder="Date"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea 
                name="description"
                type="text"
                placeholder="Description"
                className="input pt-5 resize-none h-20 input-bordered"
                ></textarea>

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Event Name
                  </span>
                </label>
                <input
                defaultValue={title}
                  type="text"
                  name="event"
                  placeholder="Organize books at the library."
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Registration"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerRegister;
