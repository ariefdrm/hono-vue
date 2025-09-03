import { v4 as uuidv4 } from "uuid";
import pool from "../config/db.config";
import { User } from "../models/user.model";

class TokenService {
  static generateToken(): string {
    return uuidv4();
  }

  static async getUserToken(email: string) {
    const query = "SELECT * FROM users WHERE email = $1";
    const response = await pool.query(query, [email]);

    return response.rows[0].token;
  }

  static async updateTokenUser(
    token: string | null,
    email: string,
  ): Promise<User | null> {
    const result = await pool.query(
      "UPDATE users SET token = $1 WHERE email = $2",
      [token, email],
    );

    return result.rows[0] || null;
  }

  static async validateToken(token: string): Promise<User | null> {
    const result = await pool.query(
      "SELECT id, email FROM users WHERE token = $1",
      [token],
    );

    return result.rows[0] || null;
  }
}

export default TokenService;
