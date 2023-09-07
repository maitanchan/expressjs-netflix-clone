import newRequest from "../../utils/newRequest"
import { loginFailure, loginStart, loginSuccess } from "./AuthAction"


export const login = async (user, dispatch) => {

    dispatch(loginStart())

    try {

        const res = await newRequest.post(`/auth/login`, user)

        res.data.isAdmin && dispatch(loginSuccess(res.data))

    } catch (err) {

        dispatch(loginFailure())

    }

}