const movies = require('../movies')

const getAllMovies = (req, res) => {
  return res.status(201).send(movies)
}

const getMovieByTitle = (req, res) => {}

const getMovieByDirector = (req, res) => {}

const addMovie = (req, res) => {}

module.exports = { getAllMovies, getMovieByTitle, getMovieByDirector, addMovie }

