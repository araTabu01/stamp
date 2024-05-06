import express from "express";
import { getAllUserInfo, getSingleUserInfo } from "../controllers/profile.js";

const router = express.Router();

// Route to get all user information
router.get("/users", getAllUserInfo);

// Route to get single user information by ID
router.get("/user/:id", getSingleUserInfo);

export default router;
