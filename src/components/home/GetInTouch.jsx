import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p className="lead text-center pb-3">
        Profile image credit @StoneWrldReview on twitter.
      </p>
    </>
  );
};

export default GetInTouch;
