const   express             = require('express'),
        app                 = express(),
        mongoose            = require("mongoose"),
        bodyParser          = require("body-parser"),
        nodemon             = require("nodemon"),
        PORT                = process.env.PORT,
        methodOverride      = require("method-override"),
        passport            = require("passport"),
        localStrategy       = require("passport-local"),
        expressSession      = require("express-session"),
        User                = require("./models/userModel"),
        Blog                = require("./models/blogModel");
    
const   indexRoutes         = require("./routes/indexRoutes"),
        blogRoutes          = require("./routes/blogRoutes"),
        adminRoutes         = require("./routes/adminRoutes"),
        contact             = require("./routes/contact");      
        

const dbURL = 'mongodb+srv://duhanbayrak:<password>@duhandb.pylk5.mongodb.net/duhanBlog?retryWrites=true&w=majority';

mongoose.connect(dbURL, { useNewUrlParser: true , useUnifiedTopology: true , ssl: true , useCreateIndex:true})
    .then((result) => {
        console.log("Bağlantı Kuruldu");
    }).catch((err) => {
        console.log("hata")
        console.log(err);
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


app.use(require("express-session")({
    secret: "güvenlik cümlesi",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(methodOverride("_method"));


app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

app.use(adminRoutes);
app.use(blogRoutes);
app.use(indexRoutes);
app.use(contact);





app.listen(PORT, () => console.log(`Example app listening on port port!`));


