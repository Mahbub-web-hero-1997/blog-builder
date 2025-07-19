import jwt from "jsonwebtoken";

// Middleware to verify JWT and set req.userId
export const verifyToken = (req, res, next) => {
  try {
    // Get token from cookies or Authorization header
    const tokenFromCookie = req.cookies?.token;
    const authHeader = req.headers?.authorization;
    const tokenFromHeader = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    const token = tokenFromCookie || tokenFromHeader;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    // Verify token and extract payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user ID to the request
    req.userId = decoded.id;

    next();
  } catch (err) {
    console.error("Token verification error:", err.message);
    return res
      .status(403)
      .json({ message: "Forbidden: Invalid or expired token" });
  }
};
