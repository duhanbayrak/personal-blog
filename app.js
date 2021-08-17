const express = require('express');
const app = express()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemon = require("nodemon");
const fileUpload = require("express-fileupload");

const dbURL = 'mongodb+srv://duhanbayrak:348415Duhan@duhandb.pylk5.mongodb.net/feyzaBlog?retryWrites=true&w=majority';

mongoose.connect(dbURL, { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then((result) => {
        console.log("Bağlantı Kuruldu");
    }).catch((err) => {
        console.log(err);
    });

app.use(fileUpload());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Routes
const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");
const blogRoutes = require("./routes/blogRoutes");





//Routes Using
app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);


const port = 3000
app.listen(port, () => console.log(`Example app listening on port port!`));


