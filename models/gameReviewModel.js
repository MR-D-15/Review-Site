const mongoose = require("mongoose");

const gameReviewSchema = mongoose.Schema({
  code: String,
  name: {
    type: String,
    required: true,
  },
  createdBy: String,
  releaseDate: Date,
  rating: Number,
  description: String,
});

const Game_Review = mongoose.model("Game-Review", gameReviewSchema);

module.exports = Game_Review;
