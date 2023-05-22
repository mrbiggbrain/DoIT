
import express, {Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"
import config from "../config/config"

const auth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ').at(1)

    if(token == null) return res.status(401).json( { msg:"Invalid Token" } );

    jwt.verify(token, config.JWT.accessTokenSecret)
}