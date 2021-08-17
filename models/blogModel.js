const fileUpload = require("express-fileupload");
const mongoose              = require("mongoose");


const BlogSchema = new mongoose.Schema({
    blogTitle:          { type: String, require: true },
    comSentence:        { type: String, require: true  },
    comImage:           { type: String,},
    blog:               { type:String, require: true},
    date:               {type: Date, default: Date.now}
   
    
});


module.exports = mongoose.model("Blog",BlogSchema);