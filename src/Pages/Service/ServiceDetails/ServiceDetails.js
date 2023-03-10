import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Swal from "sweetalert2";
import Review from "../../MyReviews/Review";
import { ClockLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  // backgroundColor: 'red'
};

const ServiceDetails = () => {
  const { imgUrl, name, price, rating, description, _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://server-fawn-pi.vercel.app/getReviewsByServiceId/${_id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("hairCutToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
        setLoading(false);
      });
  }, [_id]);

  const handleDeleteReview = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want delete this review?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOperation(id);
      }
    });
  };

  const deleteOperation = (id) => {
    setLoading(true);
    fetch(`https://server-fawn-pi.vercel.app/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("hairCutToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data?.deletedCount) {
          const remainingReviews = reviews.filter(
            (review) => review._id !== id
          );
          setReviews(remainingReviews);
          setLoading(false);
          Swal.fire("Deleted!", "Your Review has been deleted.", "success");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

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
    setLoading(true);
    fetch("https://server-fawn-pi.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("hairCutToken")}`,
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
          setLoading(false);
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
          <div className="w-full h-full relative">
            <ClockLoader
              color="#36d7b7"
              aria-label="Loading Spinner"
              data-testid="loader"
              loading={loading}
              cssOverride={override}
              size={150}
            />
          </div>
          {reviews?.map((review) => (
            <Review
              isServiceNameShowing={false}
              key={review._id}
              review={review}
              handleDeleteReview={handleDeleteReview}
            ></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
