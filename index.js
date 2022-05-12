const express = require('express')
const app = express()
const { getAllMovies, getMovieBySearch, addMovie } = require('./controllers/movies')

app.get('/movies', getAllMovies)

app.get('/movies/:search', getMovieBySearch)

app.post('/movies', addMovie)

app.listen(1337, () => {
  console.log('listening at http://localhost:1337') // eslint-disable-line no-console
})
