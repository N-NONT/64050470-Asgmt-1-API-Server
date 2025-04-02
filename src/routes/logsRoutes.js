import express from "express";
import { getLogs } from "../controllers/logsController.js";

const router = express.Router();

router.get("/:droneId", getLogs);

export default router;
