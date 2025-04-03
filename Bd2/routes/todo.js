const express = require('express');
const router = express.Router();
const {createTodo} = require("../controllers/createTodo");
const { getAllTodos } = require('../controllers/getTodos');
const {getTodoById} = require("../controllers/getById");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/delelteTodo");

router.post("/createTodo",createTodo);
router.get("/getTodos",getAllTodos);
router.get("/getTodoById/:id",getTodoById)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;