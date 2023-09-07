import newRequest from "../../utils/newRequest"
import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from "./ListAction"

//Get list
export const getLists = async (dispatch) => {

    dispatch(getListsStart())

    try {

        const res = await newRequest.get(`/lists/`, {
            headers: {
                token: "bear " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(getListsSuccess(res.data))

    } catch (err) {

        dispatch(getListsFailure())

    }

}

//Create movie
export const createList = async (list, dispatch) => {

    dispatch(createListStart())

    try {

        const res = await newRequest.post(`/lists`, list, {
            headers: {
                token: "bear " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(createListSuccess(res.data))

    } catch (err) {

        dispatch(createListFailure())

    }

}

//Delete movie
export const deleteList = async (id, dispatch) => {

    dispatch(deleteListStart())

    try {

        await newRequest.delete(`/lists/${id}`, {
            headers: {
                token: "bear " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(deleteListSuccess(id))

    } catch (err) {

        dispatch(deleteListFailure())

    }

}

//Upadate list
export const updateList = async (id, dispatch) => {



}