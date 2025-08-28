import bcrypt from "bcrypt";
import { pool } from "../config/db.config";

export interface User {
  id?: number;
  email: string;
  password: string;
}

export const createUser = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
    [email, hashedPassword],
  );
  return result.rows[0];
};

export const findUserByUsername = async (email: string) => {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    email,
  ]);
  return result.rows[0];
};

export const findUserById = async (id: number) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};
