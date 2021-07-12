import React from "react";

const Header = ({ title }) => {
  return (
    <div className="panel-heading">
      <h3 className="panel-title">
        <i className="icon wb-chat-text" aria-hidden="true" />
        {title}
      </h3>
    </div>
  );
};

export default Header;
