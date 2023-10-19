const mongoose = require("mongoose");

const movieReviewSchema = mongoose.Schema({
  code: String,
  name: {
    type: String,
    required: [true, "Name field cannot be empty"],
  },
  duration: {
    type: String,
    required: [true],
  },
  language: String,
  releaseDate: Date,
  rating: Number,
  description: String,
});

const Movie_Review = ("Movie-Review", movieReviewSchema);

module.exports = Movie_Review;
