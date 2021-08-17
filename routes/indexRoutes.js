const   express = require('express'),
        router  = express.Router(),
        ejsLint = require('ejs-lint'),
        Blog    = require("../models/blogModel");


const blogRoutes = require("./blogRoutes");

router.use(blogRoutes);

router.get("/", (req, res) =>{

    Blog.find().sort({createdAt:-1})
     .then((result) => {
         res.render("home",{blogs:result})
     }).catch((err) => {
         console.log(err)
     });
});

router.get("/about", (req, res) =>{

    res.render("about");
});
router.get("/contact", (req, res) =>{

    res.render("contact");
});
router.get("/resume", (req, res) =>{

    res.render("resume");
});

router.get("/blog/:id", (req, res) =>{
    const id = req.params.id;
    Blog.findById(id)
     .then((result) => {
         res.render('blog',{blog: result})
     }).catch((err) => {
         console.log(err);
     });
    
});
router.get("/allBlogs",(req,res) => {

    Blog.find().sort({createdAt:-1})
     .then((result) => {
         res.render("allBlogs",{blogs:result})
     }).catch((err) => {
         console.log(err)
     });
})




 
        
module.exports = router;