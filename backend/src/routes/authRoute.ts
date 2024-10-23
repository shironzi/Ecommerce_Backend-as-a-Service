import express from "express";
import { createUser, login } from "../controller/userController";

const app = express.Router();

app.post("/register", createUser);
app.post("/login", login);

export default app;
