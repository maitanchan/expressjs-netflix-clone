import newRequest from "../../utils/newRequest"
import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMovieFailure, getMovieStart, getMovieSuccess } from "./MovieAction"

//Get movies
export const getMovies = async (dispatch) => {

    dispatch(getMovieStart())

    try {

        const res = await newRequest.get(`/movies/`, {
            headers: {
                token: "bear " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(getMovieSuccess(res.data))

    } catch (err) {

        dispatch(getMovieFailure())

    }

}

//Create movie
export const createMovie = async (movie, dispatch) => {

    dispatch(createMovieStart())

    try {

        const res = await newRequest.post(`/movies`, movie, {
            headers: {
                token: "bear " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(createMovieSuccess(res.data))

    } catch (err) {

        dispatch(createMovieFailure())

    }

}

//Delete movie
export const deleteMovie = async (id, dispatch) => {

    dispatch(deleteMovieStart())

    try {

        await newRequest.delete(`/movies/${id}`, {
            headers: {
                token: "bear " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(deleteMovieSuccess(id))

    } catch (err) {

        dispatch(deleteMovieFailure())

    }

}

//Upadate movie
export const updateMovie = async (id, dispatch) => {



}