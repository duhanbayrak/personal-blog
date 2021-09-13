const mongoose              = require("mongoose");

const CommentSchema = new mongoose.Schema({
    name:      { type: String, require: true },
    email:     { type: String, require: true },
    comment:   { type: String, require: true }
});


module.exports = mongoose.model("Comment",CommentSchema);