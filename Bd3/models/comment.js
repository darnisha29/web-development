const mongoose = require('mongoose');
const Comments =  new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    user: {
        type:String,
        requires:true
    },
    comment:{
        type:String,
        requires:true
        },
    
})

module.exports =  mongoose.model('Comment',Comments);