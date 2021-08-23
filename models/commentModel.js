const mongoose              = require("mongoose");

const CommentSchema = new mongoose.Schema({
    name:          { type: String, require: true },
    email:         { type: String},
    comment:       { type: String,},
    date:          {type: Date, default: Date.now},
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
     }
    
});


module.exports = mongoose.model("Comment",CommentSchema);