const express = require('express');
const connectDb = require("./config/database");
const postRoutes = require("./routes/post");
require('dotenv').config(); 

const app = express();

const port = process.env.PORT

console.log("port", port);

app.use(express.json());

app.use("/api", postRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 

connectDb();  
