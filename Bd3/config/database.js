const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
        console.log(" Error connecting to MongoDB");
        console.error(err);
        process.exit(1);
    })
}

module.exports = connectDB;