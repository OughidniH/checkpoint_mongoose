// *********** Creation DATA BASE ************
/***** Importation Mongoose *** */
const mongoose = require("mongoose");

// ******* impotation dotenv **********
require("dotenv").config();

/********* Connction DATA BASE**********/
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("database connected");
  } catch (error) {
    handleError(error); // fonction predéfinie ^^
  }
};
module.exports = connectDB;
