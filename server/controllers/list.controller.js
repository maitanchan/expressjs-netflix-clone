import listModel from "../models/list.model.js"
import { createError } from "../utils/error.js"


export const addList = async (req, res, next) => {

    if (req.user.isAdmin) {

        const newList = new listModel(req.body)

        const savedList = await newList.save()

        res.status(200).json(savedList)

    } else {

        return next(createError(401, "Chỉ có Admin mới có thể thêm mới danh sách"))

    }

}

export const deleteList = async (req, res, next) => {

    if (req.user.isAdmin) {

        await listModel.findByIdAndDelete(req.params.listId)

        res.status(200).json("Xóa danh sách thành công")

    } else {

        return next(createError(401, "Chỉ có Admin mới có thể xóa danh sách"))

    }

}

export const getLists = async (req, res, next) => {

    const typeQuery = req.query.type

    const genreQuery = req.query.genre

    let list

    try {

        if (typeQuery) {

            if (genreQuery) {

                list = await listModel.aggregate([{ $match: { type: typeQuery, genre: genreQuery } }, { $sample: { size: 10 } }])

            } else {

                list = await listModel.aggregate([{ $match: { type: typeQuery } }, { $sample: { size: 10 } }])

            }

        } else {

            list = await listModel.aggregate([{ $sample: { size: 10 } }])

        }

        res.status(200).json(list)

    } catch (err) {

        next(err)

    }

}

export const getList = async (req, res, next) => {

    try {

        const list = await listModel.findById(req.params.listId)

        res.status(200).json(list)

    } catch (err) {

        next(err)

    }

}