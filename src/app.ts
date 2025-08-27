import express from "express";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middleware/errorHandler";  

const app = express();
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// error handler
app.use(errorHandler);

export default app;
