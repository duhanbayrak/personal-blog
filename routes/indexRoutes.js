const   express = require('express'),
        router  = express.Router(),
        Blog    = require("../models/blogModel")
        Comment = require("../models/commentModel")

const blogRoutes = require("./blogRoutes");
const commentRoutes = require("./commentRoutes");

router.use(blogRoutes);
router.use(commentRoutes);

router.get("/", (req, res) =>{

    Blog.find().sort({date:-1})
     .then((result) => {
         res.render("home",{blogs:result})
     }).catch((err) => {
         console.log(err)
     });
     
});

router.get("/about", (req, res) =>{

    res.render("about");
});
router.get("/experience", (req, res) =>{

    res.render("experience");
});
router.get("/contact", (req, res) =>{

    res.render("contact");
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

    Blog.find().sort({date: -1})
     .then((result) => {
         res.render("allBlogs",{blogs:result})
     }).catch((err) => {
         console.log(err)
     });
     
})

module.exports = router;