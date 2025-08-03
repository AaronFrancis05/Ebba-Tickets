
import { Schema,model,models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: ["Email already exists", true],
    required: ["Email is required", true],
  },
  username: {
    type: String,
    required: ["Username is required", true],
    match:[/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"],
    
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);
export default User;