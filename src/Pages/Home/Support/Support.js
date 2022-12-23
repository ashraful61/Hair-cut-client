import React from "react";

const Support = () => {
  return (
    // <div className='my-8'>
    //     https://media.istockphoto.com/id/992782254/photo/close-up-soft-focus-on-telephone-devices-at-office-desk-for-customer-service-support-concept.jpg?s=612x612&w=is&k=20&c=oLh9PzgWByXoITg8L5vtVA7wm2pG8PtJhYuHZUrbXvs=
    //     <h1 className='text-4xl py-4'>Support</h1>
    //     <p>
    //     Don’t lose valuable business because of downtime. Our salon software is backed up by enterprising technology, failover mode, constant online monitoring, backups, and alerts. Trafft ensures that your fail-proof online booking page works 24/7.
    //     </p>
    // </div>
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full relative lg:w-1/2">
          <img
            src="https://media.istockphoto.com/id/992782254/photo/close-up-soft-focus-on-telephone-devices-at-office-desk-for-customer-service-support-concept.jpg?s=612x612&w=is&k=20&c=oLh9PzgWByXoITg8L5vtVA7wm2pG8PtJhYuHZUrbXvs="
            className="w-4/5 h-full rounded-lg shadow-2xl"
            alt="person"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl py-4">Support</h1>
          <h3 className="text-2xl py-4">24 hours support</h3>
          <p>
            Don’t lose valuable business because of downtime. Our salon software
            is backed up by enterprising technology, failover mode, constant
            online monitoring, backups, and alerts. Trafft ensures that your
            fail-proof online booking page works 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
