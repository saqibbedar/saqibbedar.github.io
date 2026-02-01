import Session from "../models/session.model.js";

export default async function authMiddleware(req, res, next) {
    try {
        // 1. validate token
        const token = req.cookies["auth-token"];
        if(!token) {
            res.clearCookie("auth-token");
            return res.redirect("/login.html");
        }
        
        // 2. validate session
        const userSession = await Session.findOne({token}).populate({path: "user", select: "-createdAt -updatedAt -password -singleton -__v"});
        if(!userSession) {
            return res.redirect("/login.html");
        }

        // 3. next payload
        req.user = userSession.user;
        next();

    } catch (error) {
        console.error("authMiddleware error:", error);
        res.status(400).json("Internal server error");
    }
}