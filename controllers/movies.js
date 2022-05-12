const movies = require('../movies')

const getAllMovies = (req, res) => {
  return res.status(201).send(movies)
}

const getMovieBySearch = (req, res) => {
  const { search } = req.params
  // search through titles and directors
  const foundMovieTitle = movies.filter(movie => {
    const { title } = movie

    if (title.toLowerCase().includes(search)) {
      return true
    } else {
      return false
    }
  })

  if (foundMovieTitle.length > 0) {
    return res.status(201).send(foundMovieTitle)
  }

  // || movie.directors.forEach(director => { director.includes(search)

  const foundMovieDirector = movies.filter(movie => {
    const { directors } = movie

    for (let director of directors) {
      if (director.toLowerCase().includes(search)) {
        return true
      }
    }

    return false
  })

  // if found, send movie
  if (foundMovieDirector.length > 0) {
    return res.status(201).send(foundMovieDirector)
  }

  // if not found, send not found
  else {
    return res.status(404).send('Not on our list!')
  }
}

const addMovie = (req, res) => {}

module.exports = { getAllMovies, getMovieBySearch, addMovie }

