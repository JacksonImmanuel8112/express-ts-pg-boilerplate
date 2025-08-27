import { pool } from "../config/db";

export const getAllUsers = async () => {
  const result = await pool.query("SELECT id, name, email FROM users");
  return result.rows;
};
