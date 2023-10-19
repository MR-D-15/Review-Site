const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  code: String,
  name: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
