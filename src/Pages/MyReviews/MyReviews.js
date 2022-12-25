import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Review from './Review';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
  
    useEffect(()=> {
      fetch(`https://server-fawn-pi.vercel.app/reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setReviews(data);
      })
    },[user?.email])

    return (
        <div>
          {
            !reviews.length && <p>No reviews was found</p>
          }
           {
            reviews?.map(review => <Review key={review._id} review={review}></Review>)
           }
        </div>
    );
};

export default MyReviews;