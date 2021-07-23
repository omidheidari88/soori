import React from "react";

const Input = ({ value, handler, ...rest }) => {
  return (
    <>
      <h1>{rest.title}</h1>
      <input type="text" value={value} onChange={handler} />
    </>
  );
};

export default Input;
