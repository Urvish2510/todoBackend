import * as dotenv from "dotenv";
/* Loading the environment variables from the .env file. */
dotenv.config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import { router as ActivityRouter } from "./routes/activity.route.js";

const app = express();

/* Allowing the frontend to access the backend. */
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "no_uri";

/* Telling the application to use the express.json() middleware. This middleware will parse the body of any request that has a Content-Type of application/json. */
app.use(express.json());

app.use("/api", ActivityRouter);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* Connecting to the database and then starting the server. */
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, console.log("Server stated on http://localhost:5000"));
  })
  .catch((err) => {
    console.log(err);
  });
