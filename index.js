// *************creation d'un serveur*************

// ****** importation EXPRESS.JS ******
const express = require("express");
// ********** importation DATABASE******
const connectDB = require("./config/connectDB");
// ******* impotation dotenv **********
require("dotenv").config({ path: "./config/.env" });
const queries = require("./queries/queries");

// queries.createAndSavePerson();
// queries.createManyPerson();
// queries.search("Halima");
// queries.searchById("646b6f379e780176b26c7399");
// queries.searchByFood("Pizza");
// queries.updatePerson("646b73ffc15e8b28239a6c1e");
// queries.newUpdatePerson("Halima");
// queries.removePerson("646b6f379e780176b26c7399");
// queries.deleteManyPerson("Akram");
// queries.chainsearch();

connectDB();

const port = process.env.port;
const app = express();

app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`serveur s'exécutant sur le port ${port}`);
});
