import userModel from "../models/user.model.js"
import { createError } from "../utils/error.js"
import CryptoJS from "crypto-js"


export const updateUser = async (req, res, next) => {

    try {

        if (req.user.id === req.params.userId || req.user.isAdmin) {


            if (req.body.password) {

                req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()

            }

        }

        const updatedUser = await userModel.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true })

        const { password, ...others } = updatedUser._doc

        res.status(200).json(others)


    } catch (err) {

        next(createError(403, "Bạn chỉ có thể thay đổi thông tin cá nhân của mình"))

    }

}

export const deleteUser = async (req, res, next) => {

    if (req.user.isAdmin) {

        try {

            await userModel.findByIdAndDelete(req.params.userId)

            res.status(200).json("Xóa tài khoản thành công")

        } catch (err) {

            next(err)

        }

    } else {

        return next(createError(403, "Chỉ có Admin mới có quyền xóa tài khoản"))

    }

}

export const getUser = async (req, res, next) => {


    try {

        const user = await userModel.findById(req.params.userId)

        const { password, ...others } = user._doc

        res.status(200).json(others)

    } catch (err) {

        next(err)

    }

}

export const getUsers = async (req, res, next) => {

    const query = req.query.new

    if (req.user.isAdmin) {

        try {

            const users = query ? await userModel.find().sort({ _id: -1 }).limit(5) : await userModel.find()

            res.status(200).json(users)

        } catch (err) {

            next(err)

        }

    } else {

        return next(createError(403, "Chỉ có Admin mới có quyền hiển thị tất cả tài khoản"))

    }

}

export const getUserStats = async (req, res, next) => {

    try {

        const data = await userModel.aggregate(
            [
                {
                    $project:
                    {
                        month:
                            { $month: "$createdAt" }
                    }
                },
                {
                    $group:
                    {
                        _id: "$month",
                        total:
                        {
                            $sum: 1
                        }
                    }
                }
            ]
        )

        res.status(200).json(data)

    } catch (err) {

        next(err)

    }

}