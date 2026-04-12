import { useEffect, useState } from "react";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
  FaPaperPlane,
  FaEnvelope,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

// 1. Social Link Data
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/saqibbedar",
    icon: FaLinkedinIn,
    description: "Connect professionally",
  },
  {
    name: "X / Twitter",
    url: "https://twitter.com/saqibbedar",
    icon: FaXTwitter,
    description: "Follow for updates",
  },
  {
    name: "GitHub",
    url: "https://github.com/saqibbedar",
    icon: FaGithub,
    description: "Check out my code",
  },
];

// 2. Social Card Component
const SocialCard = ({ social }) => {
  const Icon = social.icon;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-border-light transition-colors"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-btn-primary-bg/80 border border-border flex items-center justify-center">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-fg-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-fg-primary">{social.name}</p>
        <p className="text-sm text-fg-secondary">{social.description}</p>
      </div>
      <FaArrowUpRightFromSquare className="w-4 h-4 text-fg-muted group-hover:text-fg-secondary transition-colors" />
    </a>
  );
};

// 3. Input Field Component
const InputField = ({ label, error, ...props }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-fg-secondary">
      {label}
    </label>
    <input
      {...props}
      className={`w-full px-4 py-3 bg-bg-card border rounded-xl text-fg-primary placeholder:text-fg-muted focus:outline-none transition-colors ${
        error
          ? "border-red-500/60 focus:border-red-500"
          : "border-border focus:border-fg-primary/50"
      }`}
    />
    {error && <p className="text-xs text-red-400">{error}</p>}
  </div>
);

// 4. Textarea Field Component
const TextareaField = ({ label, error, ...props }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-fg-secondary">
      {label}
    </label>
    <textarea
      {...props}
      className={`w-full px-4 py-3 bg-bg-card border rounded-xl text-fg-primary placeholder:text-fg-muted focus:outline-none transition-colors resize-none ${
        error
          ? "border-red-500/60 focus:border-red-500"
          : "border-border focus:border-fg-primary/50"
      }`}
    />
    {error && <p className="text-xs text-red-400">{error}</p>}
  </div>
);

// 5. Main Contact View Component
const ContactView = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    type: "error",
    title: "",
    message: "",
  });

  useEffect(() => {
    if (!toast.open) return;
    const timer = setTimeout(() => {
      setToast((prev) => ({ ...prev, open: false }));
    }, 4200);
    return () => clearTimeout(timer);
  }, [toast.open]);

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const validateField = (name, value) => {
    const trimmed = (value || "").trim();

    if (name === "subject") {
      if (!trimmed) return "Subject is required.";
      if (trimmed.length < 3) return "Subject must be at least 3 characters.";
      return "";
    }

    if (name === "email") {
      if (!trimmed) return "Email is required.";
      if (!validateEmail(trimmed)) return "Enter a valid email address.";
      return "";
    }

    if (name === "message") {
      if (!trimmed) return "Message is required.";
      if (trimmed.length < 10) return "Message must be at least 10 characters.";
      return "";
    }

    return "";
  };

  const validateForm = (values) => {
    const nextErrors = {
      subject: validateField("subject", values.subject),
      email: validateField("email", values.email),
      message: validateField("message", values.message),
    };

    return Object.fromEntries(
      Object.entries(nextErrors).filter(([, value]) => value)
    );
  };

  const showToast = (type, title, message) => {
    setToast({ open: true, type, title, message });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Re-validate field while typing after first validation pass.
    if (errors[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => {
        if (!fieldError) {
          const { [name]: _, ...rest } = prev;
          return rest;
        }
        return { ...prev, [name]: fieldError };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      showToast(
        "error",
        "Please fix the form",
        "All fields are required and must be valid before sending."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const api = import.meta.env.VITE_CONTACT_API || "/api/contact";
      const res = await fetch(`${api}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        showToast(
          "success",
          "Message sent",
          "Thanks! Your email was sent successfully."
        );
        setFormData({ subject: "", email: "", message: "" });
        setErrors({});
      } else {
        showToast(
          "error",
          "Message not sent",
          data.message ||
            "Unable to send email right now. Please try again later."
        );
      }
    } catch (e) {
      console.error("Error: ", e);
      showToast(
        "error",
        "Network error",
        "Could not reach the server. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[80] w-[min(92vw,560px)] transition-all duration-300 ${
          toast.open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-3 scale-[0.98] pointer-events-none"
        }`}
        role="status"
        aria-live="polite"
      >
        <div
          className={`rounded-2xl border backdrop-blur px-4 sm:px-5 py-3 sm:py-4 shadow-[0_12px_30px_rgba(0,0,0,0.35)] ${
            toast.type === "success"
              ? "bg-emerald-500/10 border-emerald-400/40"
              : "bg-bg-card border-border-light"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-sm sm:text-base font-semibold text-fg-primary">
                {toast.title}
              </p>
              <p className="text-sm text-fg-secondary mt-0.5">
                {toast.message}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setToast((prev) => ({ ...prev, open: false }))}
              className="text-fg-muted hover:text-fg-primary transition-colors text-sm"
              aria-label="Close message"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
          Contact
        </h2>
        <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
          Let's Work Together
        </p>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 max-w-7xl">
        {/* Left Column - Form */}
        <div className="w-full md:w-1/2">
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8">
            {/* Form Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-fg-primary flex items-center justify-center">
                <FaEnvelope className="w-5 h-5 text-bg-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-fg-primary">
                  Send a Message
                </h3>
                <p className="text-sm text-fg-secondary">
                  I'll get back to you soon
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField
                label="Subject"
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
              />

              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              <TextareaField
                label="Message"
                name="message"
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                error={errors.message}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-fg-primary text-bg-primary font-medium rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Right Column - Social & Info */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Intro Text */}
          <div className="space-y-4">
            <p className="text-fg-secondary leading-relaxed">
              I would love to hear from you! Whether you have a project in mind,
              want to collaborate, or just want to say hello, feel free to reach
              out.
            </p>
            <p className="text-fg-secondary leading-relaxed">
              You can send me a message using the form, or connect with me
              directly through my social media profiles below.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3 hidden md:block">
            <h4 className="text-sm font-semibold text-fg-secondary uppercase tracking-wider">
              Connect Directly
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <SocialCard key={social.name} social={social} />
              ))}
            </div>
          </div>

          {/* Response Time Note */}
          <div className="p-4 bg-bg-card/50 border border-border rounded-xl hidden md:block">
            <p className="text-sm text-fg-secondary">
              <span className="text-fg-primary font-medium">
                Typical response time:
              </span>{" "}
              Within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactView;
