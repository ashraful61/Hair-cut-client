import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/services?limit=3`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
           <div className='text-center my-8'>
             <p className="text-2xl font-bold text-orange-600">
                Service
             </p>
             <h2 className="text-5xl font-semibold">
             Our Service Area
             </h2>
             <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
           {
            services.map(service => <Service key={service._id} service={service}></Service>)
           }
           </div>
        </div>
    );
};

export default Services;