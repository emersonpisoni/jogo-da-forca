import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://hangman-game-web-backend.herokuapp.com/api'
})
