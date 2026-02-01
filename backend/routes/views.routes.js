import express from "express";
import path from "path";
import authMiddleware from "../middlewares/auth.middleware.js";

const viewsRouter = express.Router();


viewsRouter.get("/", authMiddleware, (req, res)=> {
    if(!req.user) {
        return res.redirect("/login.html");
    }
    return res.redirect("/index.html")
});

viewsRouter.get("/index.html", authMiddleware, (req, res)=> {   
    if(!req.user) {
        return res.redirect("/login.html");
    }
    return res.sendFile(path.join(process.cwd(), "views", "pages", "index.html"));
});

viewsRouter.get("/login.html", (req, res)=> {   
    return res.sendFile(path.join(process.cwd(), "views", "auth", "login.html"));
});

viewsRouter.get("/signup.html", (req, res)=> {   
    return res.sendFile(path.join(process.cwd(), "views", "auth", "signup.html"));
});


export default viewsRouter;