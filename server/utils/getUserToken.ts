import pool from "../config/db.config";

export async function getUserToken(email: string) {
  const query = "SELECT * FROM users WHERE email = $1";
  const response = await pool.query(query, [email]);

  return response.rows[0].token;
}
