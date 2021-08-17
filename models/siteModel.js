const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({
    homeImage:      { type: String, require: true },
    aboutImage:     { type: String, require: true },
    aboutText:      { type: String, require: true },
    contactImage:   { type: String, require: true },
    contactText:    { type: String, require: true },
});


module.exports = mongoose.model("Site",SiteSchema);