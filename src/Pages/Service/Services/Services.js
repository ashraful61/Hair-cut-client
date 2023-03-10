import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  

  useEffect(() => {
    fetch(`https://server-fawn-pi.vercel.app/services?limit=3`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center my-8">
        <h2 className="text-5xl font-semibold py-4">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service) => (
          <Service key={service._id} service={service} source="home"></Service>
        ))}
      </div>
      <div className="text-center my-8">
          <Link to='/services'>
          <button className="btn">See all</button>
         </Link>
      </div>
    </div>
  );
};

export default Services;
