import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

app.use(cors());


//  Routes (AFTER middleware, BEFORE listen)
app.use("/api/auth",authRoutes);{/*Any request starting with /api/auth — send it to authRoutes” */}
app.use("/api/users", userRoutes); {/*Any request starting with /api/users — send it to userRoutes” */}
app.use("/api/tasks", taskRoutes);
// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is running successfully 🚀" });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

