const express = require("express");

const router = express.Router();
const movieController = require("../controllers/movieController");

router.route("/all").get(movieController.getAllMovies);
router.route("/:code").get(movieController.getMovieDetails);
router.route("/create").post(movieController.createMovieDetails);
router.route("/update").post(movieController.updateMovieDetails);
router.route("/delete").post(movieController.deleteMovieDetails);

module.exports = router;
