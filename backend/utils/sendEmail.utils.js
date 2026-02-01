import nodemailer from "nodemailer";

const sendEmail = async (to, sub, bodyText, bodyHtml) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Prepare mail options with text fallback and optional HTML
  const mailOptions = {
    from: "Saqib Bedar's Website",
    to,
    subject: sub,
    text: bodyText,
  };

  if (bodyHtml) {
    mailOptions.html = bodyHtml;
  } else if (typeof bodyText === "string") {
    // convert newlines to <br/> for a minimal HTML fallback
    mailOptions.html = bodyText.replace(/\n/g, "<br/>");
  }

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
