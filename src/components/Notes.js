import React, { Component } from "react";
import Me from "./Me";

export default class Notes extends Component {
  render() {
    let list = this.props.list.map((element, index) => {
      return (
        <Me key={index} note={element} index={index} list={this.props.list} />
      );
    });
    return <div>{list}</div>;
  }
}
