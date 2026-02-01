import User from "../../models/user.model.js";

const USERNAME_REGEX = /^\S{5,20}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])\S{6,8}$/;

export default async function updateProfile(req, res) {
  try {
    if (!req.user) {
      return res.status(400).json("Unauthorized");
    }

    const { fullName, username, email, password } = req.user;

    const storedUser = await User.findOne({$or: [{username}, {email}]});

    if(fullName && fullName.length > 0) {
        const isPreviousName = storedUser.fullName === fullName ? true : false;
        if(!isPreviousName) {
            storedUser.fullName = fullName;
        }
    }

    if(username && username.length > 0) {
        const isPreviousUsername = storedUser.username === username ? true: false;
        if(!isPreviousUsername) {
            storedUser.username = username;
        }
    }
    
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json("Internal server error");
  }
}
