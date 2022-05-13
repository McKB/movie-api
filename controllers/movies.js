const movies = require('../movies')

const getAllMovies = (req, res) => {
  return res.status(201).send(movies)
}

const getMovieBySearch = (req, res) => {
  const { search } = req.params
  // search through titles and directors
  let foundMovieTitle = findMovieByTitle(search)

  let foundMovieDirector = findMovieByDirector(search)

  if (foundMovieTitle.length || foundMovieDirector.length) {
    let movieList = [...foundMovieTitle, ...foundMovieDirector]

    movieList = removeDuplicates(movieList)

    return res.status(201).send(movieList)
  }

  else {
    return res.status(404).send('Not on our list :/')
  }
}

const addMovie = (req, res) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = req.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return res.status(400).send('Required: title, directors, releaseDate, rating, runTime, genres')
  }

  const newMovie = req.body

  movies.push(newMovie)

  return res.status(201).send(newMovie)
}


const findMovieByTitle = (search) => {
  let foundMovies = movies.filter(movie => {
    const { title } = movie

    if (title.toLowerCase().includes(search)) {
      return true
    } else {
      return false
    }
  })

  return foundMovies
}

const findMovieByDirector = (search) => {
  let foundMovies = movies.filter(movie => {
    const { directors } = movie

    for (let director of directors) {
      if (director.toLowerCase().includes(search)) {
        return true
      }
    }

    return false
  })

  return foundMovies
}

const removeDuplicates = (movieList) => {
  let newList = []

  for (let movie of movieList) {
    if (!newList.includes(movie)) {
      newList.push(movie)
    }
  }

  return newList
}


module.exports = { getAllMovies, getMovieBySearch, addMovie }

