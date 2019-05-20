import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { note, deleteNote } = this.props;

    return (
      <div>
        <a href="https://www.youtube.com/watch?v=v6yg4ImnYwA">{note}</a>
        <button onClick={deleteNote} />
      </div>
    );
  }
}
