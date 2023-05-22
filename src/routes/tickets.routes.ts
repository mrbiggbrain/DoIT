import express from "express";
import controller from "../controllers/tickets.controller"

const router = express.Router();

router.post("/", controller.CreateTicket);
router.get("/:ticketId", controller.ReadTicket);
router.get("/", controller.ReadAllTicket);
router.put("/:ticketId", controller.UpdateTicket);
router.delete("/:ticketId", controller.DeleteTicket);
router.get("/:ticketId/notes", controller.GetTicketNotes);
router.post("/:ticketId/notes", controller.AddTicketNote);
router.delete("/:ticketId/notes/:noteId", controller.DeleteNoteFromTicket);

export = router;