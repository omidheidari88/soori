import React, { Component, createRef } from "react";

export default class ImpureComponent extends Component {
  constructor() {
    super();
    this.textInput = createRef();
  }
  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} placeholder="typing..." />
        <input type="button" value="click here!" />
      </div>
    );
  }
}
