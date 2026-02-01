import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";
import multer from "multer";
import { sendEmail } from "../../utils/index.js";

const USERNAME_REGEX = /^\S{5,20}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])\S{6,8}$/;

export default async function signup(req, res) {
    try {

        const {username, fullName, email, password} = req.body || {};
    
        // validation
        if (!username || !USERNAME_REGEX.test(username)) {
            return res.status(400).json({
                error: "Invalid username"
            });
        }

        if (!fullName || fullName.length > 50) {
            return res.status(400).json({
                error: "Invalid fullName"
            });
        }

        if (!email || !EMAIL_REGEX.test(email)) {
            return res.status(400).json({
                error: "Invalid email address"
            });
        }

        if (!password || !PASSWORD_REGEX.test(password)) {
            return res.status(422).json({
                error: "Password is not strong enough"
            });
        }

        // uniqueness check
        const existingUser = await User.findOne({ $or: [{username}, {email}]});
    
        if (existingUser)
          return res.status(409).json({ error: "User already exists" });
        
        // hash password
        const hashed_password = await bcrypt.hash(password, 10);
    
        const createdUser = await User.create({username, email, fullName, password: hashed_password});

        const subject = "Account Creation Alert!";
        const bodyHTML = `
              <p>Dear <strong>${createdUser.fullName || "User"},</p>
              <p>Thankyou for signing up at <strong>Saqib Bedar's Website</strong>.</p>
              <p>Your account was created at ${createdUser.createdAt || "Unknown"}.</p>
        `;

        sendEmail(createdUser.email, subject, "", bodyHTML);

        return res.status(201).json({ message: "User created successfully" });

    } catch (error) {
      if (error.code === 11000) {
        return res.status(403).json({
          error: "Only ONE user is allowed for this website",
        });
      }
      
      console.error("Signup error:", error);
      return res.status(500).json("Internal server error");
    }
}
