import React, { Component } from "react";
import Input from "./Input";
import Notes from "./Notes";

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.listHandler = this.listHandler.bind(this);
  }

  listHandler(value) {
    this.setState({ list: [...this.state.list, value] });
  }

  render() {
    return (
      <div className="Mine">
        <Input add={this.listHandler} />
        <Notes list={this.state.list} />
      </div>
    );
  }
}
