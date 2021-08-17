const express = require('express'),
    router = express.Router(),
    ejsLint = require('ejs-lint');


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
var user =[
    {
    username : "feyzaduhan",
    password : "feyzaduhan"
    }
];

router.get("/admin", (req, res) => {
    res.render("admin/admin", { adminActions: adminActions });
    
});

// router.post("/admin", (req, res) => {
//     res.render("admin/signIn",{user:user})
//     console.log(req.body.username);
//     if (req.body.username == user.username && req.body.password == user.password) {
//         res.redirect("admin/admin", { adminActions: adminActions });
//     }  
    
// });

  








module.exports = router;