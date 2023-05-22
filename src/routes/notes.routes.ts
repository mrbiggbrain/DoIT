import express from "express";
import controller from "../controllers/notes.controller"

const router = express.Router();

router.post("/", controller.CreateNote);
router.get("/:noteId", controller.ReadNote);
router.get("/", controller.ReadAllNote);
router.put("/:noteId", controller.UpdateNote);
router.delete("/:noteId", controller.DeleteNote);

export = router;