import express from "express";
import connectDB from "./db/index.js";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session"; // Import express-session
import { login } from "./controllers/login.controller.js"; // Import the login controller

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up session middleware
app.use(
  session({
    secret: "your-secret-key", // Replace with your own secret key
    resave: false,
    saveUninitialized: false,
  })
);

import ProfileRouter from "./routes/profile.route.js";
app.use("/", ProfileRouter);

import UserRouter from "./routes/user.js";
app.use("/", UserRouter);

// Define login route and use login controller
app.post("/login", login);

// Start
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log("You are connected to MongoDB!");
    });
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB...", err);
  });
