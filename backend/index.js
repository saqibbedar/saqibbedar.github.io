import path from "path";
import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";

// configs
import "./config/dbConnection.config.js";

// express routers
import viewsRouter from "./routes/views.routes.js";
import authRouter from "./routes/auth.routes.js";
import profileRouter from "./routes/profile.routes.js";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/views", express.static(path.join(process.cwd(), "views")));

// routers
app.use(viewsRouter);
app.use("/api", authRouter);
app.use("/api", profileRouter);

app.listen(8000, () =>
  console.log("Server is running on http://localhost:8000")
);
