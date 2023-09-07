import express from 'express'
import { addList, deleteList, getList, getLists } from '../controllers/list.controller.js'
import { verifyToken } from '../jwt/verifyToken.js'

const router = express.Router()

//Create list
router.post("/", verifyToken, addList)

//Delete list
router.delete("/:listId", verifyToken, deleteList)

//Get lists
router.get("/", verifyToken, getLists)

//Get a list
router.get("/find/:listId", getList)

export default router