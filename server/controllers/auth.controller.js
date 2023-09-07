import userModel from "../models/user.model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import CryptoJS from "crypto-js"
import { createError } from "../utils/error.js"

export const register = async (req, res, next) => {

    try {

        var cipherPassword = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()

        const newUser = new userModel({

            ...req.body,
            password: cipherPassword

        })

        await newUser.save()

        res.status(200).json("Tạo tài khoản thành công")


    } catch (err) {

        next(createError(403, "Thông tin tài khoản hoặc email đã có người sử dụng"))

    }

}

export const login = async (req, res, next) => {

    try {

        const user = await userModel.findOne({ username: req.body.username })

        if (!user)
            return next(createError(404, "Thông tìn tài khoản hoặc mật khẩu không chính xác"))

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)

        const originalPassword = bytes.toString(CryptoJS.enc.Utf8)

        if (originalPassword !== req.body.password)
            return next(createError(404, "Thông tìn tài khoản hoặc mật khẩu không chính xác"))

        const accessToken = jwt.sign(

            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "5d",
            },

        );

        const { password, ...info } = user._doc;

        res.status(200).json({ ...info, accessToken });

    } catch (err) {

        next(err)

    }

}