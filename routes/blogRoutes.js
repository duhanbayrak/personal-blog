const   express = require('express'),
        router  = express.Router(),
        Blog    = require("../models/blogModel");

const adminRoutes = require("./adminRoutes");

router.use(express.urlencoded({extended:true}))

router.use(adminRoutes);

router.get("/addNewBlog", isLoggedIn,(req, res) =>{

    res.render("blog/addNewBlog");
});
router.post("/addNewBlog", (req, res) =>{
    const newBlog = new Blog(req.body);
    console.log(req.body)
    newBlog.save()
     .then((result) => {
         
         res.redirect("/admin")
     }).catch((err) => {
         console.log(err);
     });
    
    
});
router.get("/editBlog/:id",isLoggedIn, (req, res) =>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('blog/editBlog',{blog: result})
    }).catch((err) => {
        console.log(err);
    });
});
router.post("/editBlog/:id", (req, res) =>{
    
    Blog.findOneAndUpdate({_id:req.params.id}, { blogTitle: req.body.blogTitle, comSentence: req.body.comSentence, comImage:req.body.comImage, blog:req.body.blog },{useFindAndModify: false})
        .then((result) => {
            res.redirect("/")
        }).catch((err) => {
            console.log(err)
        });
});


function isLoggedIn(req,res,next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login")
}

module.exports = router;