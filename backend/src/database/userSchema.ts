import mongoose, { Schema, Document } from "mongoose";

// Define a User interface that extends Document
interface IUser extends Document {
  email: string;
  password: string;
}

// Define a Schema
const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default userSchema;
