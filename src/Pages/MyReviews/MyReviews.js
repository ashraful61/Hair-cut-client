import React, { useContext, useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import Review from "./Review";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
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
    fetch(`https://server-fawn-pi.vercel.app/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('hairCutToken')}`
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
          Swal.fire("Deleted!", "Your Review has been deleted.", "success");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`https://server-fawn-pi.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <div>
      {!reviews.length && (
        <h1 className="text-4xl mt-4 mb-8 text-center">
          No reviews was found!
        </h1>
      )}

      {reviews?.map((review) => (
        <Review
          key={review._id}
          review={review}
          isServiceNameShowing={true}
          handleDeleteReview={handleDeleteReview}
        ></Review>
      ))}

      

      <ClockLoader
        color="#36d7b7"
        aria-label="Loading Spinner"
        data-testid="loader"
        loading={loading}
        cssOverride={override}
      />
    </div>
  );
};

export default MyReviews;
