const router = require("express").Router();
const chargeController = require("../../controllers/chargeController");

router.route("/")
  .post(chargeController.charge);
module.exports = router;
