import React, { useState } from "react";
import Swal from "sweetalert2";
import ClockLoader from "react-spinners/ClockLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  // backgroundColor: 'red'
};

const AddService = () => {
  const [loading, setLoading] = useState(false);

  const handleAddService = (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgUrl = form.imgUrl.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const description = form.description.value;

    const reqBody = {
      name,
      imgUrl,
      rating,
      price,
      description,
    };

    fetch("https://server-fawn-pi.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("hairCutToken")}`,
      },
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.insertedId) {
          setLoading(false);
          Swal.fire({
            title: "Success!",
            text: "Service added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          setLoading(false);
          Swal.fire({
            title: "Error!",
            text: "You need to login first",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleAddService}
        className="card-body w-full md:w-1/2 mx-auto mb-8"
      >
        <div className="w-full h-full relative">
          <ClockLoader
            color="#36d7b7"
            aria-label="Loading Spinner"
            data-testid="loader"
            loading={loading}
            cssOverride={override}
            size={150}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter service name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input
            type="text"
            name="imgUrl"
            placeholder="Image Url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="description"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddService;
