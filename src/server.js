import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import configRoutes from "./routes/configRoutes.js";
import statusRoutes from "./routes/statusRoutes.js";
import logsRoutes from "./routes/logsRoutes.js";
import informationRoutes from "./routes/informationRoutes.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/", informationRoutes);
app.use("/configs", configRoutes);
app.use("/status", statusRoutes);
app.use("/logs", logsRoutes);


app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
