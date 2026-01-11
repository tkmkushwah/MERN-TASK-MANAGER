import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//  Routes (AFTER middleware, BEFORE listen)
app.use("/api/auth",authRoutes);

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is running successfully 🚀" });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

