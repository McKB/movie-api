const movies = require('../movies')
const { findMovieByTitle, findMovieByDirector, removeDuplicates, validateInput } = require('../utils/movieFuntions')

const getAllMovies = (req, res) => {
  return res.status(201).send(movies)
}

const getMovieBySearch = (req, res) => {
  const { search } = req.params
  let foundMovieTitle = findMovieByTitle(search)
  let foundMovieDirector = findMovieByDirector(search)

  if (foundMovieTitle.length || foundMovieDirector.length) {
    let movieList = [...foundMovieTitle, ...foundMovieDirector]

    movieList = removeDuplicates(movieList)

    return res.status(201).send(movieList)
  } else {
    return res.status(404).send('Not on our list :/')
  }
}

const addMovie = (req, res) => {
  const newMovie = req.body

  if (!validateInput(newMovie)) {
    return res.status(400).send('Required: title, directors, releaseDate, rating, runTime, genres')
  }

  movies.push(newMovie)

  return res.status(201).send(newMovie)
}

module.exports = { getAllMovies, getMovieBySearch, addMovie }
