const Todo = require("../models/Todo")

exports.getAllTodos = async(req,res) => {
    try {
const response = await Todo.find({})

res.status(200).json(
    {
        status: "success",
        data: response,
        message:"All Todos retrieved successfully"  
    }
)
} catch (error) {
    res.status(400).json({
        status: "fail",
        data:"Failed to retrieve all todos",
        message: error.message
        })
    }
}

