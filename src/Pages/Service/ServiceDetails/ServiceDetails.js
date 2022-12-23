import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const ServiceDetails = () => {
  const { imgUrl, name, price, rating, description, _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(_id);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    console.log(review)
  }

  return (
    <div className="my-8">
      <img className="h-64" src={imgUrl} alt="" />
      <h1 className="py-2 text-3xl">{name}</h1>
      <p className="py-2 font-bold">Price: TK{price}</p>
      <p className="py-2 font-bold">Rating:{rating}</p>
      <p className="py-2">{description}</p>

      <div className="review-section my-8">
        <h1 className="text-3xl font-bold my-4">Reviews:</h1>
        <div className="my-4">
          <form onSubmit={handleAddReview}>
            <textarea name="review" className="textarea textarea-bordered w-full" placeholder="Enter your reviews"></textarea>
            <button className="btn btn-info">Submit</button>
          </form>
        </div>
        {user?.uid ? (
          <>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://placeimg.com/192/192/people"
                    alt="reviewImg"
                  />
                </div>
              </div>
              <div className="chat-bubble">
                It was said that you would, destroy the Sith, not join them.
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to={`/addReviews/${_id}`}>
              <button className="btn btn-primary">
                {" "}
                Please login to add a review
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
