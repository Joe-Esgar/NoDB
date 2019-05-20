import React from "react";

export default function Todo(props) {
  const { note, deleteNote, index, list } = props;
  return (
    <div>
      <a href="https://www.youtube.com/watch?v=v6yg4ImnYwA">{note}</a>
      <button onClick={() => deleteNote(index)} />
    </div>
  );
}
