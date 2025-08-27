import { Request, Response, NextFunction } from "express";
import { getAllUsers } from "../services/user.service";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};
