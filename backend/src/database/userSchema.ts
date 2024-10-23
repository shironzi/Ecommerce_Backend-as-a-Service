import mongoose, { Schema, Document } from "mongoose";

// Define a User interface that extends Document
export interface IUser extends Document {
    email: string;
    password: string;
    createdAt: Date;
  }

// Define a Schema
const userSchema: Schema<IUser> = new Schema({
    email: {
      type: String,
      required: true,
      unique: true, // Ensures email uniqueness
      lowercase: true, // Converts email to lowercase
      trim: true, // Removes whitespace
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

export default userSchema;
