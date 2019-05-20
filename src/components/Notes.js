import React, { Component } from "react";
import Me from "./Me";

export default class Notes extends Component {
  render() {
    let list = this.props.list.map((element, index) => {
      var deleteNote = () => {
        console.log(this.props.list, "WRYYY");
        return this.props.list.splice(index, 1);
      };
      return (
        <Me
          key={index}
          note={element}
          index={index}
          list={this.props.list}
          deleteNote={deleteNote}
        />
      );
    });
    return <div>{list}</div>;
  }
}
