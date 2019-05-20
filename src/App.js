import React, { Component } from "react";
import "./index.css";
import axios from "axios";
import Item from "./components/Item";
import Mine from "./components/Mine";
import "./reset.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
    this.getItemsFromExternalApi = this.getItemsFromExternalApi.bind(this);
    this.getMyInventory = this.getMyInventory.bind(this);
    this.updateItemByIndex = this.updateItemByIndex.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
    this.postItemsToList = this.postItemsToList.bind(this);
  }

  componentDidMount() {
    this.getItemsFromExternalApi();
    this.getMyInventory();
  }

  getItemsFromExternalApi() {
    let array = [];
    for (let i = 1; i < 37; i++) {
      array.push(axios.get(`http://www.dnd5eapi.co/api/equipment/${i}`));
    }
    axios.all(array).then(res => {
      const array = [];
      for (let i = 0; i < res.length; i++) {
        const weapon = res[i].data;
        console.log(this.state.list, "LISTOMG");
        array.push(weapon);
      }
      console.log(array);
      axios.post("/api/setInventory", array).then(res => {
        this.setState({ inventory: res.data });
      });
    });
  }

  postItemsToList(item) {
    axios.post("/api/inventoryMan", item).then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  updateItemByIndex(index, item) {
    console.log(item, index);
    axios.put(`/api/inventoryMan/${index}`, { item }).then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  getMyInventory() {
    axios.get("api/inventoryMan").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  deleteItems(index, item) {
    axios.delete(`/api/inventoryMan?index=+${index}`, { item }).then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  render() {
    const { inventory } = this.state;
    console.log("INVENTORY", inventory);
    const mappedInventory = inventory.map((element, index) => {
      const weapon_category = element["weapon_category:"];
      return (
        <div>
          <div>
            <Item
              index={element.index}
              key={index}
              name={element.name}
              equipment_category={element.equipment_category}
              weapon_category={weapon_category}
              weapon_range={element.weapon_range}
              category_range={element.category_range}
              cost={element.cost}
              damage={element.damage}
              range={element.range}
              weight={element.weight}
              properties={element.properties}
              updateItemByIndex={this.updateItemByIndex}
              deleteItems={this.deleteItems}
              postItemsToList={this.postItemsToList}
            />{" "}
          </div>
        </div>
      );
    });
    return (
      <div className="wrapper">
        <header className="head">Bandit's Inventory</header>
        <div className="mine">
          <Mine />{" "}
        </div>
        <div className="inv">{mappedInventory}</div>
      </div>
    );
  }
}
