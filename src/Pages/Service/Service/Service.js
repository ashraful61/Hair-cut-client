import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Service.css'

const Service = ({ service, source }) => {
  const { name, imgUrl, price, _id, description, rating } = service;
  console.log(source)
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
      <PhotoProvider>
      <PhotoView src={imgUrl}>
        {/* <img src="/1-thumbnail.jpg" alt="" /> */}
           <img className="service-img" src={imgUrl} alt="ServiceImg" />
      </PhotoView>
    </PhotoProvider>
     
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
            <button className="btn btn-info">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
