const Todo = require("../models/Todo");

exports.getTodoById = async (req,res) => {
    try {
        const id = req.params.id;
        const response = await Todo.findById({_id: id})
        
        if(!response) {
            return res.status(404).json(
                {
                    success:false,
                    message:'No todo found with this id'
             
                }
            )
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"Todo found successfully"
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message
        })
    }
}