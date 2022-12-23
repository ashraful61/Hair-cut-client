import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {imgUrl, name, price, rating, description} = useLoaderData();
    return (
        <div className='my-8'>
            <img className='h-64' src={imgUrl} alt="" />
            <h1 className='py-2 text-3xl'>{name}</h1>
            <p className='py-2 font-bold'>Price: TK{price}</p>
            <p className='py-2 font-bold'>Rating:{rating}</p>
            <p className='py-2'>{description}</p>
        </div>
    );
};

export default ServiceDetails;