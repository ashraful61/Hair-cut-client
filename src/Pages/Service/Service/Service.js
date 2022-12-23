import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, imgUrl, price, _id, description, rating } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://menshaircuts.com/wp-content/uploads/2022/11/types-of-haircuts-for-men-fade-spiky-top.jpg" alt="ServiceImg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: $ {price}
        </p>
        <div className="card-actions justify-end">
          <Link to={`checkout/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
