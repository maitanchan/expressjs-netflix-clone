import express from 'express'
import { deleteUser, getUser, getUserStats, getUsers, updateUser } from '../controllers/user.controller.js'
import { verifyToken } from '../jwt/verifyToken.js'

const router = express.Router()

//Update user
router.put("/:userId", verifyToken, updateUser)

//Delete user
router.delete("/:userId", verifyToken, deleteUser)

//Get a user  
router.get("/find/:userId", getUser)

//Get all user  
router.get("/", verifyToken, getUsers)

//Get user stats  
router.get("/stats", verifyToken, getUserStats)

export default router