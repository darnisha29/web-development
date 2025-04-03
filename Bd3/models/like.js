const mongoose = require('mongoose');
const Likes = new  mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    user: {
        type:String,
        requires:true
    }
    
})

module.exports =  mongoose.model('Like',Likes);