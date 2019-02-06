const router = require("express").Router();
const sampleRoutes = require("./sample");
const usersRoutes = require("./users");

router.use("/samples", sampleRoutes);
router.use("/users", usersRoutes);

module.exports = router;
