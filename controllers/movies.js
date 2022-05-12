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
    return res.status(201).send([...foundMovieTitle, ...foundMovieDirector])
  }
}

const addMovie = (req, res) => {}


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



module.exports = { getAllMovies, getMovieBySearch, addMovie }

