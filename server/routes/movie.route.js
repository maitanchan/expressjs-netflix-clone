import express from 'express'
import { addMovie, deleteMovie, getMovie, getMovies, getRandomMovie, updateMoive } from '../controllers/movie.controller.js'
import { verifyToken } from '../jwt/verifyToken.js'

const router = express.Router()

//Add movie
router.post("/", verifyToken, addMovie)

//Update movie
router.put("/:movieId", verifyToken, updateMoive)

//Delete movie
router.delete("/:movieId", verifyToken, deleteMovie)

//Get a movie
router.get("/find/:movieId", getMovie)

//Get all movies
router.get("/", verifyToken, getMovies)

//Get random movie
router.get("/random", verifyToken, getRandomMovie)

export default router