import React from "react";

const Test = ({ value, handler, ...rest }) => {
  return (
    <>
      <h1>{rest.title}</h1>
      <input type="text" value={value} onChange={handler} />
    </>
  );
};

export default Test;
