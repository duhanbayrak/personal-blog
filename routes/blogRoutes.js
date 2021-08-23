const   express = require("express"),
        router  = express.Router(),
        Blog    = require("../models/blogModel")
         
router.use(express.urlencoded({extended:true}))

router.get("/addNewBlog", (req, res) =>{

    res.render("blog/addNewBlog");
});
router.post("/addNewBlog",(req, res) =>{
    const newBlog = new Blog(req.body);
    
    newBlog.save()
     .then((result) => {
         
         res.redirect("/admin")
     }).catch((err) => {
         console.log(err);
     });
});

module.exports = router;