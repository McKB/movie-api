const express = require('express')
const app = express()
const { getAllMovies, getMovieBySearch, addMovie } = require('./controllers/movies')

app.get('/movies', getAllMovies)

app.get('/movies/:search', getMovieBySearch)

app.post('/movies', express.json(), addMovie)

app.get('*', (req, res) => {
  res.status(404).send('Sorry, not found. Try searching for a movie or a director by typing /movies/your-input-here.')
})

app.listen(1337, () => {
  console.log('listening at http://localhost:1337') // eslint-disable-line no-console
})
