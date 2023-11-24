import express from "express"

import { user } from "../controller/user.js"
import { edit } from "../controller/edit.js"


const router = express.Router()


router.post("/user",user)
router.post("/edit/:token",edit)


export default router