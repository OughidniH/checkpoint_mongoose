/*********** Creation de Model*************/
// importaion de mongoose
const mongoose = require("mongoose");
const { Schema , model} = mongoose;
// creation de Schema
const PersonSchema = new Schema({
  name: { type: String, requied: true },
  age: Number,
  favoriteFoods: [String]
});
const Person = model("Person", PersonSchema);

// exports et Creation Model
module.exports = Person;
