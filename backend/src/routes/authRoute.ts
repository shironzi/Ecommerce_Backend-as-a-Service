import express from "express";
import { createUser } from "../controller/userController";

const app = express.Router();

app.post("/register", createUser);

export default app;
