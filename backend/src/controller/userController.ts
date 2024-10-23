import { Request, Response, NextFunction } from "express";
import UserModel from "../model/userModel";
import * as bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, confirmPassword } = req.body;
  
    try {
      if (!email || !password || !confirmPassword) {
        res.status(400).json({ message: "Incomplete data" });
        return;
      }
  
      const checkEmail = await UserModel.findOne({ email });
      if (checkEmail) {
        res.status(409).json({ message: "Email is already taken!" });
        return;
      }
  
      if (password !== confirmPassword) {
        res.status(406).json({ message: "Passwords do not match" });
        return;
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({ email, password: hashedPassword });
      await newUser.save();
      console.log("Creating user successfully");
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: "Error creating user", error });
    }
  };
  