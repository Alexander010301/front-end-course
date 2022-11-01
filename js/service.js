import {sortMovies} from './helpers.js'

export function getMovies() {
   return fetch('https://run.mocky.io/v3/38d8df9d-2f05-4303-913e-56fe8c1a0e5f')
    .then((responce) => responce.json())
    .then((data) => sortMovies(data))
}