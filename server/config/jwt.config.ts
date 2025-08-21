import "dotenv/config";
import { sign } from "jsonwebtoken";

export const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Helper: Generate JWT
export function generateToken(user: any) {
  return sign({ userId: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "15m",
  });
}
