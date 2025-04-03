const Comment = require("../models/comment");
const Post = require("../models/post");

exports.commentCreate = async (req,res) => {
    try{
        console.log("in controller")
        const {post,user,comment} = req.body;
        console.log(post,user,comment)
        const newComment = new Comment({post,user,comment});
        const response = await newComment.save();
        console.log("here is the",response)

        // if(response) {
            console.log("in if")
            const finalResponse = await Post.findByIdAndUpdate(post, {$push: {comments:response._id }} , {new : true} ).populate("comments").exec();
            console.log(finalResponse);
            res.status(200).json({
                status:"success",
                data: finalResponse,
                message:'Comment Created successfully'
            })
        // }

    } catch(err) {
        console.log(err.message)
        res.status(500).json({
            success:false,
            data:"Error in create comment",
            message:err.message
        })
    }
}