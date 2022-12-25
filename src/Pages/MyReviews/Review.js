import React from 'react';
import defaultImg from "../../assets/images/person.png"

const Review = ({review}) => {
    const { photoUrl, comment, reviewer_name,  reviewer_email } = review
    return (
        <div className="chat chat-start border-b-2 border-indigo-500">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            {
             photoUrl ? <img
              src={photoUrl}
              alt="reviewImg"
            /> : <img
            src={defaultImg}
            alt="reviewImg"
          />
            }
          </div>
        </div>
        <div className="">
          <h3 className="font-bold text-2xl py-2"> {reviewer_name ? reviewer_name : reviewer_email }</h3>
          {comment}
        </div>
      </div>
    );
};

export default Review;