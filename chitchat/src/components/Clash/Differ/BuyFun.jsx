import React from "react";

const BuyBtn = ({ name }) => {
  const showAlert = () => {
    alert(name);
  };
  const handleClick = () => {
    setTimeout(showAlert, 2000);
  };
  return (
    <div>
      <span className="badge " onClick={handleClick}>
        Buy
      </span>
      <br /> <br />
    </div>
  );
};
export default BuyBtn;
