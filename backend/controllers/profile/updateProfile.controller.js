import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";

const USERNAME_REGEX = /^\S{5,20}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])\S{6,8}$/;

export default async function updateProfile(req, res) {
  try {
    if (!req.user) {
      return res.status(401).json("Unauthorized");
    }

    const { fullName, username, email } = req.body;

    const storedUser = await User.findById(req.user._id);

    if(!storedUser) {
      return res.status(404).json("User not found");
    }

    if (fullName && fullName !== storedUser.fullName) {
      storedUser.fullName = fullName;
    }

    if (username && USERNAME_REGEX.test(username) && username !== storedUser.username) {
      storedUser.username = username;
    }

    if (email && EMAIL_REGEX.test(email) && email !== storedUser.email) {
      storedUser.email = email;
    }

    await storedUser.save();

    return res.status(200).json("Profile updated successfully");

  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json("Internal server error");
  }
}
