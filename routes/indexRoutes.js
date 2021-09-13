const   express = require('express'),
        router  = express.Router(),
        Blog    = require("../models/blogModel"),
        Site = require("../models/siteModel"),
        Comment = require("../models/commentModel");
       

const adminRoutes = require("./adminRoutes"),
      blogRoutes = require("./blogRoutes");


router.use(adminRoutes);
router.use(blogRoutes);


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

// router.post("/blog/:id",(req,res) => {
   
//     Blog.findOneAndUpdate({_id:req.params.id}, { comments: req.body.comments},{useFindAndModify: false})
//         .then((result) => {
//             res.redirect("/")
//         }).catch((err) => {
//             console.log(err)
//         });
//  });


// router.post("/blog/:id", (req, res) =>{
//     const id = req.params.id;
//     console.log(id)
//     Blog.deleteOne({_id:id})
//      .then(() => {
//          res.redirect('/allBlogs')
//      }).catch((err) => {
//          console.log(err);
//      });
// });

router.get("/allBlogs",(req,res) => {

    Blog.find().sort({date: -1})
     .then((result) => {
         res.render("allBlogs",{blogs:result})
     }).catch((err) => {
         console.log(err)
     });   
})

router.delete("/allBlogs/delete/:id",(req,res) => {
   const id = req.params.id;
   Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({link:"/allBlogs"})
    })
     .catch((err) => {
        console.log(err);
     })
})

module.exports = router;