// ------------------------------
// Import Modules
// ------------------------------
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Note from "../models/notes.models"
import TicketNote from "../models/ticketsnotes.models"
import jwt from "jsonwebtoken"

const LoginUser = (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.username
    const password = req.body.password

    const user = {name: username}

    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string)
}