const Like = require('../models/like');
const Post = require("../models/post");

exports.createLike = async(req,res) => {
    try {
        
    const {post,user} = req.body
    console.log(post,user);
    const response = await Like.create({post,user});
    console.log(response);

    if(!response) {
        res.status(500).json({
            success:false,
            message:"falied to create Like"
        })
    }
    const finalResponse = await Post.findByIdAndUpdate(post,{$push:{likes:response._id}}, {new:true}).populate("likes").populate("comments").exec();

    res.status(200).json({
        success:true,
        data:finalResponse,
        message:"like created successfully"
    })
} catch(err) {
    res.status(500).json({
        success:false,
        message:err.message,
        data:"error in create like"
        })
}
}

exports.removeLike = async(req,res) => {
    try { 
    const {post,_id} = req.body
    const response = await Like.findOneAndDelete({post:post,_id:_id});
    console.log(response);

    if(!response) {
        res.status(500).json({
            success:false,
            message:"falied to create Like"
        })
    }

    const finalResponse = await Post.findByIdAndUpdate(post,{$pull:{likes:response._id}}, {new:true}).populate("likes").populate("comments").exec();

    res.status(200).json({
        success:true,
        data:finalResponse,
        message:"like created successfully"
    })
} catch(err) {
    res.status(500).json({
        success:false,
        message:err.message,
        data:"error in create like"
        })
}
}