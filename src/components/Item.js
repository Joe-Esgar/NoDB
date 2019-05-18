import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      equipment_category: "",
      weapon_category: "",
      weapon_range: "",
      category_range: "",
      cost: {},
      damage: {},
      range: {},
      weight: ""
    };
  }

  render() {
    const {
      index,
      name,
      equipment_category,
      weapon_category,
      weapon_range,
      category_range,
      cost,
      damage,
      range,
      weight,
      properties,
      updateItemByIndex,
      deleteItems
    } = this.props;
    console.log(this.state);
    console.log(cost);
    return (
      <div>
        <ul>
          <li>{index}</li>
          <li>Name: {name}</li>
          <li>Equip Cat: {equipment_category}</li>
          <li>Weap Cat: {weapon_category}</li>
          <li>Weapon Range: {weapon_range}</li>
          <li>Cat Range: {category_range}</li>
          <li>
            Cost: {cost.quantity}
            {cost.unit}
          </li>
          <li>Number of Dice: {damage.dice_count}</li>
          <li>Type: D{damage.dice_value}</li>
          <li>Range: {range.normal}</li>
          <li>{range.long}</li>
          <li>Weight: {weight}</li>
          {/* <li>{properties[0].name}</li>
          <li>{properties[1].name}</li> */}
        </ul>
        <input
          onChange={e => this.setState({ name: e.target.value })}
          placeholder="name"
        />
        <input
          onChange={e => this.setState({ equipment_category: e.target.value })}
          placeholder="eq cat"
        />
        <input
          onChange={e => this.setState({ weapon_category: e.target.value })}
          placeholder="weapcat"
        />
        <input
          onChange={e => this.setState({ weapon_range: e.target.value })}
          placeholder="weapRange"
        />
        <input
          onChange={e => this.setState({ category_range: e.target.value })}
          placeholder="catRange"
        />
        <input
          onChange={e =>
            this.setState({ cost: { ...cost, quantity: e.target.value } })
          }
          placeholder="quantity"
        />
        <input
          onChange={e =>
            this.setState({ cost: { ...cost, unit: e.target.value } })
          }
          placeholder="unit"
        />
        <input
          onChange={e =>
            this.setState({ damage: { ...damage, dice_count: e.target.value } })
          }
          placeholder="dice count"
        />
        <input
          onChange={e =>
            this.setState({ damage: { ...damage, dice_value: e.target.value } })
          }
          placeholder="dice value"
        />
        {/* <input
          onChange={e => {
            console.log("THIS STATE DAMAGE", this.state.damage);
            this.setState({
              damage: { ...this.state.damage_type, name: e.target.value }
            });
          }}
          placeholder="damage type" */}
        />
        <input
          onChange={e =>
            this.setState({ range: { ...range, normal: e.target.value } })
          }
          placeholder="range"
        />
        <input
          onChange={e => this.setState({ weight: e.target.value })}
          placeholder="weight"
        />
        \
        <button onClick={() => updateItemByIndex(index, this.state)}>
          Update
        </button>
        <button onClick={() => deleteItems(index, this.state)}>Delete</button>
      </div>
    );
  }
}
