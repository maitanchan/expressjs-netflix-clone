import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js'


export const verifyToken = (req, res, next) => {

    const authHeader = req.headers.token

    if (authHeader) {

        const token = authHeader.split(" ")[1]

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {

            if (err) {

                return next(createError(403, "Mã cookie không hợp lệ"))

            } else {

                req.user = user

            }

            next()

        })

    } else {

        return next(createError(401, "Bạn chưa đăng nhập"))

    }
}


