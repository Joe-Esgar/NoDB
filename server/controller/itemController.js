let inventory = require("../db.json");
let indexCount = 2;
module.exports = {
  getAllWeapons: (req, res, next) => {
    res.status(200).send(inventory);
  },
  postWeaponToInventory: (req, res, next) => {
    const {
      name,
      equipment_category,
      weapon_range,
      category_range,
      cost,
      damage,
      range,
      weight,
      properties
    } = req.body;
    const weapon_category = req.body["weapon_category:"];
    inventory.push({
      index: indexCount,
      name,
      equipment_category,
      weapon_category,
      weapon_range,
      category_range,
      cost,
      damage,
      range,
      weight,
      properties
    });
    indexCount += 1;
    res.status(200).send(inventory);
    console.log(inventory);
  },
  postToDb: (req, res, next) => {
    inventory = req.body;
    res.send(inventory);
  },
  updateItem: (req, res, next) => {
    const { index } = req.params;
    console.log("index to update", index, "req.body", req.body);
    const {
      name,
      equipment_category,
      weapon_category,
      weapon_range,
      category_range,
      cost,
      damage,
      range,
      weight
      // properties
    } = req.body.item;
    const indexToUpdate = inventory.findIndex(element => {
      return element.index === +index;
    });
    console.log(indexToUpdate);
    if (indexToUpdate != -1) {
      console.log(inventory[indexToUpdate]["subtype:"]);
      inventory[indexToUpdate].name = name || inventory[indexToUpdate].name;
      inventory[indexToUpdate].equipment_category = equipment_category;
      inventory[indexToUpdate].weapon_range = weapon_range;
      inventory[indexToUpdate].category_range = category_range;
      inventory[indexToUpdate].weapon_category = weapon_category;
      inventory[indexToUpdate].cost = cost;
      inventory[indexToUpdate].damage = damage;
      inventory[indexToUpdate].range = range;
      inventory[indexToUpdate].weight = weight;
      // inventory[indexToUpdate].properties = properties;
    }
    console.log(inventory);
    res.status(200).send(inventory);
  },
  removeItem: (req, res, next) => {
    const deleteIndex = req.query.index;
    console.log(deleteIndex);
    inventoryIndex = inventory.findIndex(
      inventory => inventory.index == deleteIndex
    );
    inventory.splice(inventoryIndex, 1);
    res.status(200).send(inventory);
  }
};
