import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])\S{6,8}$/;

export default async function updateProfile(req, res) {
  try {
    if (!req.user) {
      return res.status(401).json("Unauthorized");
    }

    const { oldPassword, newPassword } = req.body || {};
    console.log(req.body || "")

    if(!oldPassword || !newPassword || !PASSWORD_REGEX.test(newPassword)) return res.status(400).json("A valid password is required");

    const storedUser = await User.findById(req.user._id);

    if(!storedUser) {
      return res.status(404).json("User not found");
    }

    const isMatched = await bcrypt.compare(oldPassword, storedUser.password);

    if(!isMatched) {
        return res.status(401).json("Your old password does not matched");
    }

    const isSamePrevPassword = await bcrypt.compare(newPassword, storedUser.password);
    if(isSamePrevPassword) {
        res.status(400).json("New password must be different");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    storedUser.password = hashedPassword;

    await storedUser.save();

    return res.status(200).json("Password updated successfully");

  } catch (error) {
    console.error("Error updating user password:", error);
    res.status(500).json("Internal server error");
  }
}
