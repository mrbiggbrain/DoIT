// ------------------------------
// Import Modules
// ------------------------------
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import config from "../config/config"

const LoginUser = (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.username
    const password = req.body.password

    const user = {name: username}

    const accessToken = jwt.sign(user, config.JWT.accessTokenSecret)
    res.status(201).json({ accessToken })
}

export default {LoginUser}