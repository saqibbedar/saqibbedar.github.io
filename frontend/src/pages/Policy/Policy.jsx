import { Link } from "react-router-dom";
import { FaShieldAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const lastUpdated = "January 17, 2026";

const Policy = () => {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <title>Privacy Policy | Saqib Bedar</title>

      {/* Header */}
      <div className="max-w-4xl mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <FaShieldAlt className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fg-primary">
              Privacy Policy
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-fg-muted">
          <FaCalendarAlt className="w-4 h-4" />
          <span>Last updated: {lastUpdated}</span>
        </div>
      </div>

      {/* Notice Banner */}
      <div className="max-w-4xl mb-10">
        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <p className="text-sm text-amber-600 dark:text-amber-400">
            <strong>Note:</strong> This Privacy Policy may be updated at any
            time without prior notice. Please review this page periodically to
            stay informed about how we protect your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-10">
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            Introduction
          </h2>
          <p className="text-fg-secondary leading-relaxed">
            Welcome to Saqib Bedar's portfolio website. Your privacy is
            important to me. This Privacy Policy explains how I collect, use,
            disclose, and safeguard your information when you visit my website
            or use my services. Please read this policy carefully to understand
            my practices regarding your personal data.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            Information I Collect
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-fg-primary mb-2">
                1. Information You Provide Directly
              </h3>
              <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
                <li>
                  <strong>Contact Form:</strong> When you send a message through
                  the contact form, I collect your email address, subject, and
                  message content.
                </li>
                <li>
                  <strong>Service Requests:</strong> When you request services
                  (consultation, teaching, collaboration, employment
                  opportunities), I may collect your name, email, company
                  information, and project details.
                </li>
                <li>
                  <strong>Newsletter/Updates:</strong> If you subscribe to
                  updates, I collect your email address.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-fg-primary mb-2">
                2. Information Collected Automatically
              </h3>
              <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
                <li>
                  <strong>Usage Data:</strong> Browser type, device information,
                  pages visited, time spent on pages, and referring URLs.
                </li>
                <li>
                  <strong>Analytics:</strong> I may use third-party analytics
                  services (like Google Analytics) to understand how visitors
                  use the website.
                </li>
                <li>
                  <strong>Cookies:</strong> Small data files stored on your
                  device to enhance your experience and remember preferences.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            How I Use Your Information
          </h2>
          <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
            <li>To respond to your inquiries and provide requested services</li>
            <li>
              To process and manage service requests (consultation, teaching,
              collaboration)
            </li>
            <li>To improve the website and user experience</li>
            <li>
              To send updates about projects, courses, or content (if you've
              opted in)
            </li>
            <li>To analyze website traffic and optimize performance</li>
            <li>To protect against fraudulent or unauthorized activity</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            Data Sharing & Disclosure
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            I do not sell, trade, or rent your personal information to third
            parties. However, I may share your information in the following
            circumstances:
          </p>
          <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
            <li>
              <strong>Service Providers:</strong> Third-party services that help
              operate the website (hosting, analytics, email services).
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to
              protect rights and safety.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of assets.
            </li>
          </ul>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            Third-Party Services
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            This website may contain links to external services and platforms:
          </p>
          <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
            <li>
              <strong>GitHub:</strong> For project repositories and sponsorships
            </li>
            <li>
              <strong>Buy Me a Coffee / Patreon:</strong> For financial support
              and donations
            </li>
            <li>
              <strong>YouTube:</strong> For course content and tutorials
            </li>
            <li>
              <strong>LinkedIn / Twitter / Instagram:</strong> For social
              connections
            </li>
            <li>
              <strong>Udemy / Coursera:</strong> For external course platforms
            </li>
          </ul>
          <p className="text-fg-secondary leading-relaxed mt-4">
            These third-party services have their own privacy policies. I
            encourage you to review them before providing any personal
            information.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            Data Security
          </h2>
          <p className="text-fg-secondary leading-relaxed">
            I implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the Internet is 100% secure, and I cannot guarantee absolute
            security.
          </p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            Data Retention
          </h2>
          <p className="text-fg-secondary leading-relaxed">
            I retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this policy, unless a longer
            retention period is required by law. Contact form submissions and
            service requests are typically retained for up to 2 years.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            Your Rights
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
            <li>
              <strong>Access:</strong> Request a copy of your personal data
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate data
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal data
            </li>
            <li>
              <strong>Opt-out:</strong> Unsubscribe from marketing
              communications
            </li>
            <li>
              <strong>Data Portability:</strong> Request transfer of your data
            </li>
          </ul>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            Cookies Policy
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            This website uses cookies to enhance your browsing experience:
          </p>
          <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to
              function properly
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your settings (e.g.,
              dark/light mode)
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help understand how visitors
              use the website
            </li>
          </ul>
          <p className="text-fg-secondary leading-relaxed mt-4">
            You can control cookies through your browser settings. Disabling
            cookies may affect website functionality.
          </p>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            Children's Privacy
          </h2>
          <p className="text-fg-secondary leading-relaxed">
            This website is not intended for children under 13 years of age. I
            do not knowingly collect personal information from children. If you
            believe a child has provided personal information, please contact me
            to have it removed.
          </p>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            Changes to This Policy
          </h2>
          <p className="text-fg-secondary leading-relaxed">
            I reserve the right to update this Privacy Policy at any time.
            Changes will be posted on this page with an updated "Last updated"
            date. Your continued use of the website after changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            Contact Me
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact me:
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-fg-primary text-bg-primary font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            <FaEnvelope className="w-4 h-4" />
            Contact Me
          </Link>
        </section>

        {/* Related Links */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-lg font-semibold text-fg-primary mb-4">
            Related
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/terms-conditions"
              className="px-4 py-2 text-sm font-medium text-fg-secondary bg-bg-card border border-border rounded-full hover:border-border-light hover:text-fg-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-fg-secondary bg-bg-card border border-border rounded-full hover:border-border-light hover:text-fg-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Policy;
