const router = require("express").Router();
const sampleRoutes = require("./sample");

// Book routes
router.use("/samples", sampleRoutes);

module.exports = router;
