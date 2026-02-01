import User from "../../models/user.model.js";
import Session from "../../models/session.model.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { sendEmail } from "../../utils/index.js";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])\S{6,8}$/;

export default async function login(req, res){
    try {

        const { email, password } = req.body || {};
        
        // validation
        if(!email || !EMAIL_REGEX.test(email)) {
            return res.status(400).json("Invalid email address");
        }

        if(!password || !PASSWORD_REGEX.test(password)) {
            return res.status(400).json("A valid password is required")
        }

        const user = await User.findOne({email}).select("-__v -singleton -updatedAt -username");
        
        if(!user){
            return res.status(401).json("User does not exist");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if(!isPasswordMatched) return res.status(400).json("Password does not matched");

        // delete older sessions
        await Session.deleteMany({user: user._id});

        // create a session token
        const token = crypto.randomBytes(32).toString("hex");
        // expire time
        const tokenExpiresAt = 1000 * 60 * 60; // 1hr

        await Session.create({
            token,
            user: user._id,
            expiresAt: new Date(Date.now() + tokenExpiresAt) 
        });
        
        res.cookie("auth-token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: tokenExpiresAt
        });

        // const subject = "Login Alert!";
        // const bodyHTML = `
        //     <p>Dear <strong>${user.fullName || "User"},</p>
        //     <p>Your account was logged in at <strong>Saqib Bedar's Website</strong>.</p>
        //     <p>If you were not this please try change your password immediately, logged in occurred on ${user.createdAt || "Unknown"}.</p>
        // `;
        
        // sendEmail(user.email, subject, "", bodyHTML);

        return res.status(200).json("Logged in successfully!");

    } catch (error) {
        console.error("login error:", error);
        return res.status(500).json("Internal server error");
    }
}