const Person = require("../model/personModel");

// creation un instance person

const person = new Person({
  name: "Akram",
  age: 30,
  favoriteFoods: ["Pizza", "kaftaji"],
});

/*****Create and save a record of a Model:*****/

const createAndSavePerson = async () => {
  try {
    await person.save(); //instance.save()
  } catch (error) {
    console.log(error);
  }
};
/*****Create Many recordn Model.create(tab):*****/
const people = [
  {
    name: "Halima",
    age: 30,
    favoriteFoods: ["Pizza", "salade"],
  },
  {
    name: "rafik",
    age: 32,
    favoriteFoods: ["makrouna", "mloukhiya"],
  },
];

const createManyPerson = async () => {
  try {
    await Person.create(people); //model.create(tab)
  } catch (error) {
    console.log(error);
  }
};

// Use model.find() to Search Your Database
const search = async (searchByName) => {
  try {
    const data = await Person.find({ name: `${searchByName}` });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Use model.findById() to Search Your Database By _id

const searchById = async (id) => {
  try {
    const data = await Person.findById({ _id: `${id}` });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
//Use model.findOne() to Return a Single Matching Document from Your Database
const searchByFood = async (food) => {
  try {
    const data = await Person.findOne({ favoriteFoods: { $all: [`${food}`] } });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
//Perform Classic Updates by Running Find, Edit, then Save
const updatePerson = async (id) => {
  try {
    const data = await Person.findById(`${id}`);
    data.favoriteFoods.push("hamburger");
    data.save();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// Perform New Updates on a Document Using model.findOneAndUpdate()
const newUpdatePerson = async (personName) => {
  try {
    const data = await Person.findOneAndUpdate(
      { name: `${personName}` },
      { age: 20 },
      { new: true }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// Delete One Document Using model.findByIdAndRemove
const removePerson = async (id) => {
  try {
    const data = await Person.findByIdAndDelete(`${id}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Delete Many Documents with model.remove()
const deleteManyPerson = async (personName) => {
  try {
    const data = await Person.deleteMany({ name: `${personName}` });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// Chain Search Query Helpers to Narrow Search Results
const chainsearch = async () => {
  try {
    const data = await Person.find({favoriteFoods:{$all: ["Pizza"]}})
    .sort({name:"asc"})
    .limit(2)
    .select("-age")
    .exec()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
//exportation

module.exports = {
  createAndSavePerson,
  createManyPerson,
  search,
  searchById,
  searchByFood,
  updatePerson,
  newUpdatePerson,
  removePerson,
  deleteManyPerson,
  chainsearch,
};
