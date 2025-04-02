import express from "express";
import { getLogs, postDroneLog } from "../controllers/logsController.js";


const router = express.Router();

router.get("/:droneId", getLogs);
router.post("/", postDroneLog);  // บันทึก log ใหม่

export default router;
