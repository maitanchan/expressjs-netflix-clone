//Get movies
export const getListsStart = () => ({

    type: "GET_LISTS_START"

})

export const getListsSuccess = (lists) => ({

    type: "GET_LISTS_SUCCESS",
    payload: lists

})

export const getListsFailure = () => ({

    type: "GET_LISTS_FAILURE"

})

//Create list
export const createListStart = () => ({

    type: "CREATE_LIST_START"

})

export const createListSuccess = (movie) => ({

    type: "CREATE_LIST_SUCCESS",
    payload: movie

})

export const createListFailure = () => ({

    type: "CREATE_LIST_FAILURE"

})

//Update list
export const updateListStart = () => ({

    type: "CREATE_LIST_START"

})

export const updateListSuccess = (list) => ({

    type: "CREATE_LIST_SUCCESS",
    payload: list

})

export const updateListFailure = () => ({

    type: "CREATE_LIST_FAILURE"

})

//Delete movies
export const deleteListStart = () => ({

    type: "DELETE_LIST_START"

})

export const deleteListSuccess = (id) => ({

    type: "DELETE_LIST_SUCCESS",
    payload: id

})

export const deleteListFailure = () => ({

    type: "DELETE_LIST_FAILURE"

})

