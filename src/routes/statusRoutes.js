import express from "express";
import { getConfig } from "../controllers/statusController.js";

const router = express.Router();

router.get("/:droneId", getConfig);

export default router;

