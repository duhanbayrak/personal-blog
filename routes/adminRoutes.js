const   express       = require('express'),
        router          = express.Router(),
        Site    = require("../models/siteModel"),
        User = require("../models/userModel"),
        passport = require("passport"),
        Blog    = require("../models/blogModel");
        

router.use(express.urlencoded({extended:false}));


let adminActions = [
    {
        actionId: 1,
        actionName: "changeHomeImage",
        displayName: "Change Home Image"
    },
    {
        actionId: 2,
        actionName: "changeAboutImage",
        displayName: "Change About Image"
    },
    {
        actionId: 3,
        actionName: "changeAboutText",
        displayName: "Change About Text"
    },
    {
        actionId: 4,
        actionName: "addNewBlog",
        displayName: "Add New Blog"
    },
    {
        actionId: 5,
        actionName: "listAllBlogs",
        displayName: "List All Blogs"
    },
];



router.get("/admin",isLoggedIn, (req, res) => {
    res.render("admin/admin", { adminActions: adminActions }); 
});
router.get("/changeHomeImage",isLoggedIn, (req, res) => {
    res.render("admin/changeHomeImage"); 
});
router.get("/listAllBlogs",isLoggedIn, (req, res) => {
    
    Blog.find().sort({date: -1})
     .then((result) => {
         res.render("allBlogs",{blogs:result})
     }).catch((err) => {
         console.log(err)
     });   
});

router.get("/login", (req,res) => {
    res.render("admin/login")
});
router.post("/login",passport.authenticate("local",
    {
        successRedirect:"/",
        failureRedirect:"/login"

    }),(req,res) => {

    });
router.get("/signup", isLoggedIn,(req,res) => {
    res.render("admin/signup")
});
router.post("/signup", (req,res) => {
    console.log(req.body)
    const newUser = new User({username:req.body.username})
    User.register(newUser, req.body.password, (err,user) => {
        if (err) {
            console.log(err);
            res.redirect("/signup")
        }
            passport.authenticate("local")(req,res, () => {
                res.redirect("/");
            })
    })
});
router.get("/logout", (req,res) => {
    req.logOut();
    res.redirect("/")
});

function isLoggedIn(req,res,next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login")
}

module.exports = router;