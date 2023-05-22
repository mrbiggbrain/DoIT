// ------------------------------
// Import Modules
// ------------------------------
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Note from "../models/notes.models"
import TicketNote from "../models/ticketsnotes.models"

const CreateNote = (req: Request, res: Response, next: NextFunction) => {
    const {Subject, Content} = req.body

    const note = new Note({
        Subject,
        Content
    })

    return note.save()
        .then((note) => { res.status(201).json(note)})
        .catch((error) => res.status(500).json(error));
}

const ReadNote = (req: Request, res: Response, next: NextFunction) =>
{
    const noteId = req.params.noteId

    return Note.findById(noteId)
        .then((note) => (note ? res.status(200).json(note) : res.status(404).json({msg: "Not Found"})))
        .catch((error) => res.status(500).json(error));
}

const ReadAllNote = (req: Request, res: Response, next: NextFunction) => {
    return Note.find()
        .then((notes) => res.status(200).json(notes))
        .catch((error) => res.status(500).json(error));
}

const UpdateNote = (req: Request, res: Response, next: NextFunction) => {
    const noteId = req.params.noteId

    return Note.findById(noteId)
        .then((note) => {
            if(note)
            {
                note.set(req.body);

                return note.save()
                    .then((note) => { res.status(201).json(note)})
                    .catch((error) => res.status(500).json(error));
            }
            else
            {
                res.status(404).json({msg: "Not Found"});
            }
        })
        .catch((error) => res.status(500).json({error}));
}

const DeleteNote = (req: Request, res: Response, next: NextFunction) => {
    const noteId = req.params.noteId

    const ticket = Note.findByIdAndDelete(noteId)
        .then((note) => {
            if(note)
            {
                const ticketnotes = Note.deleteMany({note: noteId})
                    .then((tickets) => {
                        res.status(201).json({message: 'deleted'})
                    })
            }
            else
            {
                res.status(404).json({message: 'Not found'})
            }
        })  
        .catch((error) => res.status(500).json({error}));
}

export default {CreateNote, ReadNote, ReadAllNote, UpdateNote, DeleteNote}