const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res) => {
    try{
        const id = req.params.id;
        const response = await Todo.findByIdAndDelete({_id:id});
        if(!response){
            return res.status(404).json({message:"Todo not found"});
            }

            res.status(200).json({
                success:true,
                data:response,
                message:"Todo deleted successfully"
            })

    }catch(err) {
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message
        })

    }
}