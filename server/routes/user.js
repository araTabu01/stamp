import express from "express";
const router = express.Router();

import { login } from "../controllers/login.controller.js";

router.post("/login", login);

// module.exports = router;
export default router;
