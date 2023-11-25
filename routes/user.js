import express from "express"

import { user } from "../controller/user.js"
import { edit } from "../controller/edit.js"
import { getUser } from "../controller/getUser.js"


const router = express.Router()


router.post("/user",user)
router.post("/edit/:token",edit)
router.get("/getUser/:token",getUser)


export default router