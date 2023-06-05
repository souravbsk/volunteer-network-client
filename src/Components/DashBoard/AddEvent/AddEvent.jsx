import React from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const imgHostToken = import.meta.env.VITE_IMGBB_API;
const AddEvent = () => {
  const imgHostURL = `https://api.imgbb.com/1/upload?key=${imgHostToken}`;

  const handleAddEvent = (e) => {
    e.preventDefault();
    console.log(imgHostToken);
    const form = e.target;
    const title = form.title.value;
    const date = form.date.value;
    const description = form.description.value;
    const imgValue = form.img.files[0];

    const formData = new FormData();
    formData.append("image", imgValue);
    console.log(formData);

    fetch(imgHostURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          const imgURL = data?.data?.display_url;
          console.log(imgURL);
          const newEvent = { title, date, description, img: imgURL };
          fetch("https://volunteer-network-server-brown.vercel.app/addEvent", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newEvent),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: "Event Added",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              }
            });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Volunteer Network | Add Event</title>
      </Helmet>
      <h2 className="py-6 text-xl bg-white ps-9 font-semibold">Add event</h2>
      <div className=" p-12 ">
        <form onSubmit={handleAddEvent} className="bg-white p-9 rounded-md">
          <div className="flex mb-8 items-center gap-8 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Event Title
                </span>
              </label>
              <label className="">
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
                <span className="label-text text-lg font-medium">
                  Event Date
                </span>
              </label>
              <label className="">
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
                <span className="label-text text-lg font-medium">
                  Description
                </span>
              </label>
              <label className="">
                <textarea
                required
                  name="description"
                  className="resize-none w-full p-5 h-32 input input-bordered"
                  id=""
                 
                ></textarea>
              </label>
            </div>
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Event Picture
                </span>
              </label>
              <label className="border">
                <input
                required
                  name="img"
                  accept="image/*"
                  type="file"
                  className="file-input border w-full "
                />
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
