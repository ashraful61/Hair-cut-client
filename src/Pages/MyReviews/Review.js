import React, { useContext } from "react";
import defaultImg from "../../assets/images/person.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Review = ({ review, handleDeleteReview }) => {
  const { photoUrl, comment, reviewer_name, reviewer_email, _id } = review;
  const { user } = useContext(AuthContext);


  return (
    <div className="flex m-8">
      <div className="chat chat-start border-2 border-indigo-500 mb-3 rounded w-full">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            {photoUrl ? (
              <img src={photoUrl} alt="reviewImg" />
            ) : (
              <img src={defaultImg} alt="reviewImg" />
            )}
          </div>
        </div>
        <div className="">
          <h3 className="font-bold text-2xl py-2">
            {" "}
            {reviewer_name ? reviewer_name : reviewer_email}
          </h3>
          {comment}
        </div>
      </div>
      &nbsp;
      {
        user?.email === reviewer_email &&
        <div style={{ 'width': "200px", }}>
        <button className="btn btn-info">Edit</button> &nbsp;
        <button onClick={() => handleDeleteReview(_id)} className="btn btn-error">Delete</button>
      </div>
      } 
    </div>
  );
};

export default Review;
