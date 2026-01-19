import express from "express";
import recommendationRoutes from "./routes/recommendation.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use("/api", recommendationRoutes);
app.use(errorMiddleware);

export default app;
