const express = require('express');
const nodemon = require("nodemon");
const app = express()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;

const dbURL = 'mongodb+srv://duhanbayrak:348415Duhan@duhandb.pylk5.mongodb.net/duhanBlog?retryWrites=true&w=majority';

mongoose.connect(dbURL, { useNewUrlParser: true }, { useUnifiedTopology: true },{ssl: true})
    .then((result) => {
        console.log("Bağlantı Kuruldu");
    }).catch((err) => {
        console.log("hata")
        console.log(err);
    });


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");
const blogRoutes = require("./routes/blogRoutes");
const commentRoutes = require("./routes/commentRoutes");
const contact = require("./routes/contact");

app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);
app.use(commentRoutes);
app.use(contact);


app.listen(PORT, () => console.log(`Example app listening on port port!`));


