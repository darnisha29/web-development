const Post = require("../models/post");

exports.createPost = async (req, res) => {

    try {
        const { title, body } = req.body;
        const post = new Post({ title, body });
        const response = await post.save();

        res.status(200).json({
            success: true,
            data: response,
            message: "Post created successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: 'Failed to create Post'
        });
    }
};
