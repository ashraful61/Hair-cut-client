import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetail = useLoaderData();
    return (
        <div>
            {serviceDetail?.name}
        </div>
    );
};

export default ServiceDetails;