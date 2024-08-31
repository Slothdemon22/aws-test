import mongoose, { Schema, model, models } from "mongoose";

// Define the User interface
interface IUser {
  name: string;
}

// Define the schema using the IUser interface
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
});

// Create the model if it doesn't already exist
const User = models.User || model<IUser>("User", userSchema);

export default User;
