// packages/backend/src/index.ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';

import authRoutes from "./routes/authRoute";

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

if (!process.env.MONGO_URI) {
  throw new Error("MongoDB connection URI is not defined");
}

const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

const startServer = async () => {
  try {
    await mongoose.connect(mongoURI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to Database: ", error);
    process.exit(1);
  }
};

startServer();

