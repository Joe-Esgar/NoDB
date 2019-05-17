import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      list: []
    };
    this.getItemsFromExternalApi = this.getItemsFromExternalApi.bind(this);
    // this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount() {
    this.getItemsFromExternalApi();
  }

  getItemsFromExternalApi() {
    let array = [];
    for (let i = 1; i < 37; i++) {
      axios.get(`http://www.dnd5eapi.co/api/equipment/${i}`).then(res => {
        array.push(res.data);
        this.setState({
          list: array
        });
      });
    }
  }

  postItemsToList(item) {
    axios.post("ap/inventoryMan", item).then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  render() {
    console.log("this.state.list", this.state.list);
    return <div className="App">Inventory manager</div>;
  }
}
