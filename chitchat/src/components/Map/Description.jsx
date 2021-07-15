import React from "react";

const Description = ({ summary, info, images }) => {
  const { leaderName1 } = info;
  console.log(images);
  return (
    <>
      <img className="flag" src={images} alt="no-image" />
      <h1>{leaderName1}</h1>
      <p>{summary}</p>
    </>
  );
};

export default Description;
