const Movie = require("../models/movieModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

async function isExist(code) {}

exports.getAllMovies = catchAsync(async (req, res, next) => {
  const data = await Movie.find().select({
    _id: 0,
    __v: 0,
  });

  res.status(200).json({
    status: "success",
    results: data.length,
    data,
  });
});

exports.getMovieDetails = catchAsync(async (req, res, next) => {
  const data = await Movie.find({ code: req.params.code }).select({
    _id: 0,
    __v: 0,
  });

  if (data.length === 0)
    return next(new AppError("No movie has been found", 404));

  res.status(200).json({
    status: "success",
    data,
  });
});

exports.createMovieDetails = catchAsync(async (req, res, next) => {
  const data = await Movie.create(req.body);

  res.status(201).json({
    status: "success",
    data,
  });
});

exports.updateMovieDetails = catchAsync(async (req, res, next) => {
  const data = await Movie.findOneAndUpdate({ code: req.body.code }, req.body, {
    new: true,
    runValidators: true,
  }).select({ _id: 0, __v: 0 });

  if (data === null) return next(new AppError("No movie has been found", 404));

  res.status(200).json({
    status: "success",
    data,
  });
});

exports.deleteMovieDetails = catchAsync(async (req, res, next) => {
  const data = await Movie.find({ code: req.body.code });

  if (data.length === 0)
    return next(new AppError("No movie has been found", 404));

  await Movie.findOneAndDelete({ code: req.body.code });

  res.status(200).json({
    status: "success",
    message: "Operation Successfully",
  });
});
