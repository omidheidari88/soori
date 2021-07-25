import React from "react";
import loader from "./loading.gif";
const Loading = () => {
  return (
    <div>
      <img src={loader} alt="loader" />
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;
