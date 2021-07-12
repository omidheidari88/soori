import React, { Component } from "react";

export default class BuyClass extends Component {
  showAlert = (name) => {
    alert(name);
  };
  handleClick = () => {
    const { name } = this.props;
    setTimeout(() => this.showAlert(name), 2000);
  };

  render() {
    return (
      <div>
        <span className="badge pointer" onClick={this.handleClick}>
          Buy
        </span>
        <p>class</p>
      </div>
    );
  }
}
