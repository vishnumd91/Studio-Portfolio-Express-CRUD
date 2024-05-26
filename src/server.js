import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { router } from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(
  cors({
    origin: "*",
  })
);

// CORS Config
app.options("*", cors());
app.use(express.json());

// Setting up Routes Middleware
app.use("/api", router);

app.use("/", (req, res) => res.send("Server is Up and Running"));

// This will start the server and listen to the port defined in ENV.
app.listen(PORT, () => {
  console.log("Server Running Successfully");
});

// Connect to MongoDB Atlas server
connectDB();
