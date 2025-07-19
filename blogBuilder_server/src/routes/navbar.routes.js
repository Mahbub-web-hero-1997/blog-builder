import express from "express";
import { getNavbar, updateNavbar } from "../controllers/navbarController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// 🔐 All navbar routes require user to be logged in (verified)
router.get("/", verifyToken, getNavbar); // GET /api/navbar
router.put("/", verifyToken, updateNavbar); // PUT /api/navbar

export default router;
