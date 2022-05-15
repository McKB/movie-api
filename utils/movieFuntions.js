const movies = require('../movies')

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

const validateInput = (obj) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = obj

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return false
  }

  return true
}

module.exports = { findMovieByTitle, findMovieByDirector, removeDuplicates, validateInput }
