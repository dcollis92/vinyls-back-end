import "dotenv/config.js";
import express from "express";
import logger from "morgan";
import cors from "cors";
//import disconnect from 'disconnect'

import { router as profilesRouter } from "./routes/profiles.js";
import { router as authRouter } from "./routes/auth.js";
import { router as recordsRouter } from "./routes/records.js";

import("./config/database.js");

const app = express();
//const Discogs = require('disconnect').Client;

app.use(cors());
//app.use(disconnect())
app.use(logger("dev"));
app.use(express.json());

app.use("/api/records", recordsRouter);
app.use("/api/profiles", profilesRouter);
app.use("/api/auth", authRouter);

app.use(function (req, res, next) {
  res.status(404).json({ err: "Not found" });
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message });
});

export { app };
