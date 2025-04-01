const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.listen(8000,() => {
    console.log('Server Started on port 8000');
});
app.get("/", (req,res) => {
    res.send("Hello world");    
})
app.post("/api/cars", (req,res) => {
    const {name,brand} =  req.body;
    console.log(name,brand);
    res.send("Car added successfully");
})