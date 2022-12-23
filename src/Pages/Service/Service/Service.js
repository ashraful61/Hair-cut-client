import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service, source }) => {
  const { name, imgUrl, price, _id, description, rating } = service;
  console.log(source)
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imgUrl} alt="ServiceImg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold">
          Price: ${price}
        </p>
        <p className="font-bold">Rating: {rating}</p>
        <p>
          {description?.length >= 100 ? description.slice(0,100) + '...' : description}
        </p>
        <div className="card-actions justify-between">
        {/* to={`checkout/${_id}`} */}
          <Link to={source === 'home' ? `services/${_id}` : `../services/${_id}`}>
            <button className="btn btn-info">Buy Now</button>
          </Link>
          <Link to={source === 'home' ? `services/${_id}` : `../services/${_id}`}>
            <button className="btn btn-info">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
