const router = require("express").Router();
const samplesController = require("../../controllers/samplesController");

// Matches with "/api/books"
router.route("/")
  .get(samplesController.findAll)
  .post(samplesController.create);

// Matches with "/api/books/:id"
router
  .route("/:name")
  .get(samplesController.findByName)
  .put(samplesController.update)
  .delete(samplesController.remove);

module.exports = router;
 