const   express = require("express"),
        router  = express.Router(),
        Comment    = require("../models/commentModel");

const blogRoutes = require("./blogRoutes");


router.use(blogRoutes);

router.use(express.urlencoded({extended:true}))

router.get("/blog", (req, res) =>{

    res.render("blog");
});
router.post("/blog",(req, res) =>{
    
    const newComment = new Comment(req.body);
    
    newComment.save()
     .then((result) => {
         res.redirect("/allBlogs")
     }).catch((err) => {
         console.log(err);
     });
  

});



module.exports = router;