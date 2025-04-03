const Todo = require("../models/Todo");

exports.updateTodo = async(req,res) => {
    try{
        const id = req.params.id;
        const {title,description} = req.body;
        const response = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()}
        )

            if(!response) {
                return res.status(404).json({
                    success:false,
                    data:"Todo not found"
                })

            }
            res.status(200).json({
                success:true,
                data:response,
                message: "Todo updated successfully"
            })

    } catch (err){
        res.status(500).json({
            success:false,
            data:"Internal Server error",
            message:err.message
        })

    }
}