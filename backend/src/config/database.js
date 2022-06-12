const mongoose = require("mongoose");

const URI = "mongodb+srv://DinethSahashra:dineth123@medilabhms.zkfae.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    console.log("Database Connected");
}

module.exports = connectDB;