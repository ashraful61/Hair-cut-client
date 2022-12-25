import React from "react";

const AddService = () => {
    const handleAddService = (event) => {
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
            description
        }

        
    fetch('https://server-fawn-pi.vercel.app/services', {
        method: 'POST',
        headers: {
          "content-type":"application/json"
        },
        body: JSON.stringify(reqBody)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);

      })

    }
  return (
    <div>
      <form onSubmit={handleAddService} className="card-body w-1/2">
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
