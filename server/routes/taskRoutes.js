import express from "express";
import {
  createTask,
  getTasks,
  deleteTask,
} from "../controllers/taskController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .post(protect, createTask)
  .get(protect, getTasks);

router.delete("/:id", protect, deleteTask);

export default router;