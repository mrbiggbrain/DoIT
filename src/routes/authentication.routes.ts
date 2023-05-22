import express from "express";
import controller from "../controllers/authentication.controller"

const router = express.Router();

router.post("/", controller.LoginUser);
//router.delete("/", )
//router.put("/", )

export = router;