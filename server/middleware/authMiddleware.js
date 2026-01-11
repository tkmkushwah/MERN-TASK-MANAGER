import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  let token;

  // 1️⃣ Check Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // 2️⃣ Get token from header
      token = req.headers.authorization.split(" ")[1];

      // 3️⃣ Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 4️⃣ Get user from DB (without password)
      req.user = await User.findById(decoded.id).select("-password");

      // 5️⃣ Allow request to continue
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, invalid token" });
    }
  }

  // 6️⃣ No token
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

export default protect;


{/*Client → sends request
       → middleware runs
       → token verified?
          ├─ NO → 401 error
          └─ YES → API executes*/}