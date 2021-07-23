import React, { Component } from "react";

const someFunction = (Wrapper) => {
  return class Hoc extends Component {
    state = {
      value: "",
    };
    changeHandler = (e) => {
      return this.setState({
        value: e.target.value,
      });
    };
    render() {
      return (
        <div>
          <Wrapper value={this.state.value} handler={this.changeHandler} {...this.props} />
        </div>
      );
    }
  };
};

export default someFunction;
