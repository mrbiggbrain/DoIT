// ------------------------------
// Import Modules
// ------------------------------
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Ticket from "../models/tickets.models"
import TicketNote from "../models/ticketsnotes.models"
import Note from "../models/notes.models"

const CreateTicket = (req: Request, res: Response, next: NextFunction) => {
    const {Subject} = req.body

    const ticket = new Ticket({
        Subject
    });

    return ticket.save()
        .then((ticket) => { res.status(201).json(ticket)})
        .catch((error) => res.status(500).json(error));
}

const ReadTicket = (req: Request, res: Response, next: NextFunction) => {
    const ticketId = req.params.ticketId

    return Ticket.findById(ticketId)
        .then((ticket) => (ticket ? res.status(200).json(ticket) : res.status(404).json({msg: "Not Found"})))
        .catch((error) => res.status(500).json(error));
}

const ReadAllTicket = (req: Request, res: Response, next: NextFunction) => {
    return Ticket.find()
        .then((tickets) => res.status(200).json(tickets))
        .catch((error) => res.status(500).json(error));
}

const UpdateTicket = (req: Request, res: Response, next: NextFunction) => {
    const ticketId = req.params.ticketId

    return Ticket.findById(ticketId)
        .then((ticket) => {
            if(ticket)
            {
                ticket.set(req.body);

                return ticket.save()
                    .then((ticket) => { res.status(201).json(ticket)})
                    .catch((error) => res.status(500).json(error));
            }
            else
            {
                res.status(404).json({msg: "Not Found"});
            }
        })
        .catch((error) => res.status(500).json({error}));
}

const DeleteTicket = (req: Request, res: Response, next: NextFunction) => {
    const ticketId = req.params.ticketId

    const ticket = Ticket.findByIdAndDelete(ticketId)
        .then((ticket) => (ticket ? res.status(201).json({message: 'deleted'}) : res.status(404).json({message: 'Not found'})))
        .catch((error) => res.status(500).json({error}));
}

const GetTicketNotes = async (req: Request, res: Response, next: NextFunction) => {
    const ticketId = req.params.ticketId

    TicketNote.find({Ticket: ticketId})
        .then(async (ticketNotes) => {

            var notes : any[] = []

            for(let ticketNote of ticketNotes)
            {
                //console.log(ticket);
                await Note.findById(ticketNote.Note)
                    .then((note) => {
                        notes.push(note);
                    });
                
            }

            res.status(200).json(notes);

        })
        .catch((error) => res.status(500).json({error}));
}

const AddTicketNote = (req: Request, res: Response, next: NextFunction) => {
    //const noteId = req.params.noteId;
    const {_id} = req.body
    const ticketId = req.params.ticketId

    Note.exists({_id: _id}).then((result) => {
        Ticket.exists({_id: ticketId}).then((result) => {
            const ticketNote = new TicketNote({Ticket: ticketId, Note: _id})
            ticketNote.save().then((ticket) => {
                res.status(201).json(ticketNote);
            })
        })
    }).catch((error) => res.status(500).json(error));
}

const DeleteNoteFromTicket = (req: Request, res: Response, next: NextFunction) => {
    const noteId = req.params.noteId;
    const ticketId = req.params.ticketId
    
    TicketNote.findOneAndDelete({Note: noteId, Ticket: ticketId})
        .then((ticketnote) => (ticketnote ? res.status(201).json({message: 'deleted'}) : res.status(404).json({message: 'Not found'})))
        .catch((error) => res.status(500).json(error));
}

export default {CreateTicket, ReadTicket, ReadAllTicket, UpdateTicket, DeleteTicket, GetTicketNotes, AddTicketNote, DeleteNoteFromTicket}