var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var BurgerData = sequelize.define("burgers", {
  burger_name: Sequelize.STRING,
  devoured: Sequelize.STRING
}, {
  timestamps: false
});

// Syncs with DB
BurgerData.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = BurgerData;