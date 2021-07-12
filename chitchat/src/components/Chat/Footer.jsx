import React, { useState } from "react";

const Footer = ({ getValue }) => {
  const [inputValue, setInputValue] = useState("");
  const changeHandler = (e) => setInputValue(e.target.value);
  const clickHandler = () => {
    getValue(inputValue);
    setInputValue("");
  };
  return (
    <div className="panel-footer">
      <form>
        <div className="input-group">
          <input value={inputValue} type="text" className="form-control" placeholder="Say something..." onChange={(e) => changeHandler(e)} />
          <span className="input-group-btn">
            <button className="btn btn-primary" onClick={(e) => clickHandler(e)} type="button">
              Send
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Footer;
