import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

// middlewares
app.use(express.json());

// Allowed origins
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://saqibbedar.github.io",
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  })
);

const sendEmail = async ({ email, subject, message }) => {
  // Gmail SMTP transport used only for sending portfolio contact emails.
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Prepare mail options with text fallback and optional HTML
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    replyTo: email,
    subject: subject || "Portfolio contact request",
    text: [`Email: ${email || "N/A"}`, "", message || ""].join("\n"),
  };

  mailOptions.html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
      <h2 style="margin: 0 0 12px;">New Portfolio Message</h2>
      <p><strong>Email:</strong> ${email || "N/A"}</p>
      <p><strong>Subject:</strong> ${subject || "Portfolio contact request"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
    </div>
  `;

  await transporter.sendMail(mailOptions);
};

app.get("/", (req, res) => res.send("api working fine"));

app.post("/api/contact", async (req, res) => {
  try {
    const { email, subject, message } = req.body || {};

    // Only email and message are required from the frontend form.
    if (!email || !message || !subject) {
      return res.status(400).json({
        success: false,
        message: "Email, subject and message are required.",
      });
    }

    await sendEmail({ email, subject, message });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
    });
  }
});

app.listen(8000, () =>
  console.log("Server is running on http://localhost:8000")
);
