const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());

require('dotenv').config();
const port = process.env.PORT;

const todoRoutes = require("./routes/todo")
app.use('/api',todoRoutes );

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

const connectDB = require("./config/database")
connectDB();  // Connect to the database