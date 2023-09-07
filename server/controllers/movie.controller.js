import movieModel from "../models/movie.model.js"
import { createError } from "../utils/error.js"

export const addMovie = async (req, res, next) => {

    if (req.user.isAdmin) {


        try {

            const newMovie = new movieModel(req.body)

            const savedMovie = await newMovie.save()

            res.status(200).json(savedMovie)

        } catch (err) {

            next(err)

        }


    } else {

        return next(createError(401, "Chỉ Admin mới có quyền thêm mới phim"))

    }

}

export const updateMoive = async (req, res, next) => {

    if (req.user.isAdmin) {

        try {

            const updatedMovie = await movieModel.findByIdAndUpdate(

                req.params.movieId,
                {
                    $set: req.body,
                },
                { new: true }

            )

            res.status(200).json(updatedMovie)

        } catch (err) {

            next(err)

        }

    } else {

        return next(createError(401, "Chỉ có Admin mới có quyền thay đổi thông tin của phim"))

    }

}

export const deleteMovie = async (req, res, next) => {

    if (req.user.isAdmin) {

        try {

            await movieModel.findByIdAndDelete(req.params.movieId)

            res.status(200).json("Xóa phim thành công")

        } catch {

            next(err)

        }

    } else {

        return next(createError(401, "Chỉ có Admin mới có quyền xóa phim"))

    }

}

export const getMovie = async (req, res, next) => {

    try {

        const movie = await movieModel.findById(req.params.movieId)

        res.status(200).json(movie)

    } catch (err) {

        next(err)

    }

}

export const getMovies = async (req, res, next) => {

    if (req.user.isAdmin) {

        try {

            const movies = await movieModel.find()

            res.status(200).json(movies.reverse())

        } catch (err) {

            next(err)

        }

    } else {

        return next(createError(401, "Chỉ có Admin mới có quyền hiển thị tất cả phim"))

    }

}

export const getRandomMovie = async (req, res, next) => {

    const type = req.query.type

    let movie

    try {

        if (type === "series") {

            movie = await movieModel.aggregate([

                {
                    $match: {
                        isSeries: true
                    },

                },

                {
                    $sample: {
                        size: 1
                    },
                },

            ])

        } else {

            movie = await movieModel.aggregate([

                {
                    $match: {
                        isSeries: false
                    },
                },

                {
                    $sample: {
                        size: 1
                    }
                }

            ])

        }

        res.status(200).json(movie)

    } catch (err) {

        next(err)

    }

}