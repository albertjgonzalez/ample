const router = require("express").Router();
const samplesController = require("../../controllers/samplesController");

// Matches with "/api/books"
router.route("/")
  .get(samplesController.findAll)
  .post(samplesController.create);

// Matches with "/api/books/:id"
router
  .route("/:type")
  .get(samplesController.findByType)
  .put(samplesController.update)
  .delete(samplesController.remove);

module.exports = router;
 