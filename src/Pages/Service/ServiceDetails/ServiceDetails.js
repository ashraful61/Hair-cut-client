import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Swal from "sweetalert2";
import Review from "../../MyReviews/Review";

const ServiceDetails = () => {
  const { imgUrl, name, price, rating, description, _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([])
  console.log(_id);

  useEffect(()=> {
    fetch(`http://localhost:5000/reviews/${_id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setReviews(data);
    })
  },[_id])

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    console.log(review);

    const reqBody = {
      service_id: _id,
      service_name: name,
      reviewer_photoUrl: user?.photoURL,
      reviewer_email: user?.email,
      reviewer_name: user?.displayName,
      review
    }

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(reqBody)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);  
      if(data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Review added successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      }
    })


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
        {user?.uid ? 
          reviews?.map(review => <Review key={review._id} review={review}></Review>)
         :
          <>
            <Link to={`/addReviews/${_id}`}>
              <button className="btn btn-primary">
                {" "}
                Please login to add a review
              </button>
            </Link>
          </>
        }
      </div>
    </div>
  );
};

export default ServiceDetails;
