import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { note, index, list } = this.props;
    var deleteNote = () => {
      return list.splice(index, 1);
    };
    return (
      <div>
        <p>{note}</p>
        <button onClick={deleteNote} />
      </div>
    );
  }
}
