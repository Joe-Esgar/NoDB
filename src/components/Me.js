import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { note, index } = this.props;
    var deleteNote = () => {
      console.log(this.props.list, "WRYYY");
      return this.props.list.splice(index, 1);
    };
    return (
      <div>
        <a href="https://www.youtube.com/watch?v=v6yg4ImnYwA">{note}</a>
        <button onClick={deleteNote} />
      </div>
    );
  }
}
