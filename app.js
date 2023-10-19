const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// ----------------- ROUTES ----------------------
const movieRouter = require("./routes/movieRoutes");
const movieReviewRouter = require("./routes/movieReviewRoutes");
const gameRouter = require("./routes/gameRoutes");
const gameReviewRouter = require("./routes/gameReviewRoutes");

const Movie = require("./models/movieModel");

const app = express();
dotenv.config();

// -------- MIDDLEWARE -------------
app.use(express.json());

const DB = process.env.DATABASE.replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(DB).then(console.log("DB is connected successfully"));

app.use("/api/v1/movie-list", movieRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Service is up on http://localhost:${process.env.PORT}`);
});
