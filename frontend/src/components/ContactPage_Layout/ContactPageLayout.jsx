import { useEffect, useState } from "react";
import { BaseURL } from "../../assets/assets";
import "./ContactPageLayout.css";

const ContactPageLayout = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await fetch(`${BaseURL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (data.success) {
        alert(data.message);
        setFormData({name: "", email: "", message: ""});
      } else {
        alert(data.message);
      }
    } catch(e) {
      console.error("Error: ", e);
      alert("An error occurred, please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-page-layout">
      <div className="contact-page-inputs">
        <h1>Get in touch</h1>
        <div className="contact-us-msg">
          I would love to hear from you! If you have any questions, comments or
          feedback, please use the form below or reach me through my social
          media handles.
        </div>
        <input type="text" name="name" onChange={handleChange} placeholder="Name" value={formData.name} required />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" value={formData.email} required />
        <textarea name="message" onChange={handleChange} placeholder="Message" value={formData.message} rows={"10"}></textarea>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default ContactPageLayout;
