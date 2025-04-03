const { createPost } = require('../controllers/createPost');
const express = require('express');
const router = express.Router();
const {commentCreate} = require("../controllers/createComment")
const {createLike, removeLike} = require("../controllers/createLike")

console.log("Router Loaded");

// Route to handle post creation
router.post("/createPost", createPost);
router.post("/createComment",commentCreate);
router.post("/createLike",createLike);
router.post("/unLike",removeLike);

module.exports = router;
