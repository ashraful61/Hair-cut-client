import React from "react";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full relative lg:w-1/2">
          <img
            src="https://st4.depositphotos.com/13193658/23131/i/1600/depositphotos_231316190-stock-photo-young-female-hairdresser-combing-hair.jpg"
            className="w-4/5 h-full rounded-lg shadow-2xl"
            alt="person"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="my-5 font-bold text-6xl">About Us</p>
          <h1 className="text-3xl font-bold">
            We are best <br />
            & experienced <br />
            in this field
          </h1>
          <p className="py-6">
            Trafft is your digital salon business partner: it is a salon
            management software crafted with a focus on the 3 cornerstones of a
            successful salon business: building customer loyalty, keeping
            well-organized schedules, and delegating routine to automation.
          </p>
          {/* <div className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </div> */}
          {/* <button className="btn btn-primary">Get More Info</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
