const express = require("express");
const app = express();
app.use(express.json());
const {
  getAllWeapons,
  postWeaponToInventory,
  updateItem,
  removeItem
} = require("./controller/itemController");

app.get("/api/inventoryMan", getAllWeapons);
app.post("/api/inventoryMan", postWeaponToInventory);
app.put("/api/inventoryMan/:index", updateItem);
app.delete("/api/inventoryMan/", removeItem);

const port = 9001;
app.listen(port, () => console.log(`server listening on port ${port}`));
