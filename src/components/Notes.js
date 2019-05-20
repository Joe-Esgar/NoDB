import React, { Component } from "react";
import Me from "./Me";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propsArray: []
    };
  }
  delete = index => {
    this.props.list.splice(index, 1);
    console.log("this.props.list: ", this.props.list);
    this.setState({
      propsArray: []
    });
  };
  render() {
    let list = this.props.list.map((element, index, array) => {
      console.log(element, index, "ELELELELELELELEL");
      return (
        <Me
          key={index}
          note={element}
          index={index}
          list={array}
          deleteNote={this.delete}
        />
      );
    });
    console.log("list: ", list);
    return <div>{list}</div>;
  }
}
