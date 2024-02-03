const passport = require("passport");

const router = require("express").Router();

router.use("/users", require("./users"));
router.use('/task', require('./task.js'))
router.use("/", require("./swagger.js"));


// router.get("/", (req, res) => {
//     //#swagger.tags=["Hello World"]
//   res.send("Hello World");
// });

router.get('/login', passport.authenticate('github'), (req, res) =>{});

router.get('/logout', function(req, res, next){
  req.logOut(function(err){
    if (err) {return next(err);}
    res.redirect('/')
  });
});


module.exports = router;
