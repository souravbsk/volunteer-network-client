import React from "react";
import Swal from "sweetalert2";

const AddEvent = () => {


  const handleAddEvent = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const date = form.date.value;
    const description = form.description.value;
    const img = form.img.value;


  const newEvent = {title,date,description,img};

  fetch("http://localhost:5000/addEvent",{
    method:"POST",
    headers:{
      'content-type':"application/json"
    },
    body:JSON.stringify(newEvent)
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedId){
      Swal.fire({
        title: 'Success!',
        text: 'Event Added',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  })

  }


  return (
    <div>
      <h2 className="py-6 text-xl bg-white ps-9 font-semibold">Add event</h2>
      <div className=" p-12 ">
        <form onSubmit={handleAddEvent} className="bg-white p-9 rounded-md">
          <div className="flex mb-8 items-center gap-8 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">Event Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">Event Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="date"
                  placeholder="Event Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex mb-8 items-center gap-8 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">Description</span>
              </label>
              <label className="input-group">
                <textarea name="description" className="resize-none w-full input input-bordered" id="" cols="30" rows="10"></textarea>
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">Event Picture</span>
              </label>
              <label className="input-group">
              <input name="img" type="file" className="file-input w-full " />
              </label>
            </div>
          </div>
          <div className="text-right">
            <input className="btn bg-blue-600" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
