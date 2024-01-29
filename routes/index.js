const router = require("express").Router();

router.use("/", require("./swagger.js"));

router.get("/", (req, res) => {
    //#swagger.tags=["Hello World"]
  res.send("Hello World");
});

router.use("/users", require("./users"));
router.use('/task', require('./task.js'))

module.exports = router;
