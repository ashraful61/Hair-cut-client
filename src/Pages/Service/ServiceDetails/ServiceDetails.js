import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Swal from "sweetalert2";
import Review from "../../MyReviews/Review";

const ServiceDetails = () => {
  const { imgUrl, name, price, rating, description, _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  // console.log(_id);

  useEffect(() => {
    fetch(`https://server-fawn-pi.vercel.app/getReviewsByServiceId/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [_id]);


  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    console.log(review);
    if (!review) {
    }

    const reqBody = {
      service_id: _id,
      service_name: name,
      reviewer_photoUrl: user?.photoURL,
      reviewer_email: user?.email,
      reviewer_name: user?.displayName,
      comment: review,
    };

    fetch("https://server-fawn-pi.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          reqBody._id = data.insertedId;
          setReviews([reqBody, ...reviews]);
          form.reset();
          Swal.fire({
            title: "Success!",
            text: "Review added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="my-8">
      <img className="h-64" src={imgUrl} alt="" />
      <h1 className="py-2 text-3xl">{name}</h1>
      <p className="py-2 font-bold">Price: TK{price}</p>
      <p className="py-2 font-bold">Rating:{rating}</p>
      <p className="py-2">{description}</p>

      <div className="review-section my-8">
        <h1 className="text-3xl font-bold my-4">Reviews:</h1>

        {user?.uid ? (
          <div>
            <div className="my-4">
              <form onSubmit={handleAddReview}>
                <textarea
                  name="review"
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter your reviews"
                ></textarea>
                <button className="btn btn-info">Submit</button>
              </form>
            </div>
          </div>
        ) : (
          <>
            Please &nbsp;
            <Link className="underline" to="/login">
              login
            </Link>
            &nbsp; first to add a review
          </>
        )}

        <div className="my-8">
          {!reviews.length && (
            <h1 className="text-4xl mt-4 mb-8 text-center">
              No reviews was found!
            </h1>
          )}
          {reviews?.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
