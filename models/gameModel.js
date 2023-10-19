const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  code: String,
  name: String,
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
