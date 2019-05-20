import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAdd() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input
          className="shutupdestiny"
          value={this.state.input}
          placeholder="Enter new item"
          onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}
