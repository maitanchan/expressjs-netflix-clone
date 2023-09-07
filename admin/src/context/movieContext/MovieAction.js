//Get movies
export const getMovieStart = () => ({

    type: "GET_MOVIES_START"

})

export const getMovieSuccess = (movies) => ({

    type: "GET_MOVIES_SUCCESS",
    payload: movies

})

export const getMovieFailure = () => ({

    type: "GET_MOVIES_FAILURE"

})

//Create movies
export const createMovieStart = () => ({

    type: "CREATE_MOVIE_START"

})

export const createMovieSuccess = (movie) => ({

    type: "CREATE_MOVIE_SUCCESS",
    payload: movie

})

export const createMovieFailure = () => ({

    type: "CREATE_MOVIE_FAILURE"

})

//Update movies
export const updateMovieStart = () => ({

    type: "CREATE_MOVIE_START"

})

export const updateMovieSuccess = (movie) => ({

    type: "CREATE_MOVIE_SUCCESS",
    payload: movie

})

export const updateMovieFailure = () => ({

    type: "CREATE_MOVIE_FAILURE"

})

//Delete movies
export const deleteMovieStart = () => ({

    type: "DELETE_MOVIE_START"

})

export const deleteMovieSuccess = (id) => ({

    type: "DELETE_MOVIE_SUCCESS",
    payload: id

})

export const deleteMovieFailure = () => ({

    type: "DELETE_MOVIE_FAILURE"

})

