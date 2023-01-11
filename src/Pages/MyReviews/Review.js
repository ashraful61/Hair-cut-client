import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import defaultImg from "../../assets/images/person.png";
import { AuthContext } from "../../contexts/AuthProvider";
import ClockLoader from "react-spinners/ClockLoader";

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

const Review = ({ review, handleDeleteReview, isServiceNameShowing }) => {
  let { photoUrl, comment, reviewer_name, reviewer_email, _id, service_name } =
    review;
  const { user } = useContext(AuthContext);
  const [updateComment, setUpdateComment] = useState(comment);
  const [loading, setLoading] = useState(false);

  const handleEditComment = async () => {
    let { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Edit your comment",
      inputValue: updateComment,
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });

    if (text) {
      console.log(text);
      console.log(JSON.stringify(text));
      setLoading(true);
      fetch(`https://server-fawn-pi.vercel.app/reviews/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("hairCutToken")}`,
        },
        body: JSON.stringify({ comment: text }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data?.modifiedCount) {
            setLoading(false);

            setUpdateComment(text);
            Swal.fire("Success!", "Your Review has been updated.", "success");
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <>
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
      <div className="flex m-8">
        <div className="border-2 border-indigo-500 mb-3 rounded w-full p-4">
          {isServiceNameShowing && (
            <h1 className="text-xl font-bold my-5">
              Service Name: {service_name}{" "}
            </h1>
          )}
          <div className="chat chat-start">
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
              {updateComment}
            </div>
          </div>
        </div>
        &nbsp;
        <div style={{ width: "200px" }}>
          {user?.email === reviewer_email && (
            <>
              <button onClick={handleEditComment} className="btn btn-info">
                Edit
              </button>{" "}
              &nbsp;
              <button
                onClick={() => handleDeleteReview(_id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Review;
