import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import configRoutes from "./routes/configRoutes.js";



dotenv.config();



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/configs", configRoutes);

app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
