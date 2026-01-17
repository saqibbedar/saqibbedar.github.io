import { Link } from "react-router-dom";
import { FaFileContract, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const lastUpdated = "January 17, 2026";

const Terms = () => {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <title>Terms & Conditions | Saqib Bedar</title>

      {/* Header */}
      <div className="max-w-4xl mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <FaFileContract className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fg-primary">
              Terms & Conditions
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
            <strong>Note:</strong> These Terms & Conditions may be updated at
            any time without prior notice. Please review this page periodically.
            By continuing to use this website, you accept any changes made.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-10">
        {/* Agreement */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            1. Agreement to Terms
          </h2>
          <p className="text-fg-secondary leading-relaxed">
            By accessing and using this website (saqibbedar.github.io), you
            agree to be bound by these Terms & Conditions and all applicable
            laws and regulations. If you do not agree with any of these terms,
            you are prohibited from using or accessing this site.
          </p>
        </section>

        {/* Use License */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            2. Use License
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            Permission is granted to temporarily view the materials on this
            website for personal, non-commercial use only. This license does not
            include:
          </p>
          <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
            <li>Modifying or copying the materials without permission</li>
            <li>
              Using materials for commercial purposes without authorization
            </li>
            <li>Attempting to reverse engineer any software on this website</li>
            <li>Removing any copyright or proprietary notations</li>
            <li>
              Transferring materials to another person or mirroring on another
              server
            </li>
          </ul>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            3. Services Offered
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            I offer various services through this website. All services require
            explicit request and confirmation:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-fg-primary mb-2">
                3.1 Development Services
              </h3>
              <p className="text-fg-secondary">
                Full-time and part-time development opportunities are subject to
                mutual agreement, contract terms, and availability.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-fg-primary mb-2">
                3.2 Technical Consultation
              </h3>
              <p className="text-fg-secondary">
                Consultation services are provided on an appointment basis.
                Session details, duration, and fees will be discussed before
                confirmation.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-fg-primary mb-2">
                3.3 Speaking Engagements
              </h3>
              <p className="text-fg-secondary">
                Speaker requests are evaluated based on event relevance,
                schedule availability, and other factors. Confirmation is not
                guaranteed.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-fg-primary mb-2">
                3.4 Teaching & Mentorship
              </h3>
              <p className="text-fg-secondary">
                Online teaching sessions are arranged after discussing
                curriculum, schedule, and terms. Limited slots available.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-fg-primary mb-2">
                3.5 Collaboration
              </h3>
              <p className="text-fg-secondary">
                Collaboration proposals (YouTube, projects, content) are
                reviewed individually. I reserve the right to accept or decline
                any proposal.
              </p>
            </div>
          </div>
        </section>

        {/* Sponsorship & Support */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            4. Sponsorship & Financial Support
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            Financial contributions through platforms like GitHub Sponsors, Buy
            Me a Coffee, or Patreon are:
          </p>
          <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
            <li>
              Voluntary and non-refundable unless specified by the platform's
              policy
            </li>
            <li>
              Not a purchase of goods or services unless explicitly stated
            </li>
            <li>Subject to the respective platform's terms and conditions</li>
            <li>
              Acknowledged with gratitude but do not guarantee specific
              deliverables
            </li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            5. Intellectual Property
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            All content on this website is owned by Saqib Bedar unless otherwise
            stated:
          </p>
          <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
            <li>
              <strong>Open Source Projects:</strong> Licensed under their
              respective licenses (MIT, Apache, etc.) as specified in each
              repository
            </li>
            <li>
              <strong>Website Design & Code:</strong> Protected by copyright;
              unauthorized reproduction is prohibited
            </li>
            <li>
              <strong>Course Content:</strong> Educational materials are for
              personal use; redistribution requires permission
            </li>
            <li>
              <strong>Blog Posts & Articles:</strong> May be shared with proper
              attribution and link back
            </li>
          </ul>
        </section>

        {/* User Conduct */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            6. User Conduct
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            When using this website or contacting me, you agree to:
          </p>
          <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
            <li>Provide accurate and truthful information</li>
            <li>Not submit spam, malicious content, or false requests</li>
            <li>Respect intellectual property rights</li>
            <li>Not attempt to disrupt or damage the website</li>
            <li>Not use automated systems to scrape or extract data</li>
            <li>Communicate professionally and respectfully</li>
          </ul>
        </section>

        {/* Disclaimer */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            7. Disclaimer
          </h2>
          <div className="space-y-4 text-fg-secondary leading-relaxed">
            <p>
              <strong>7.1</strong> The materials on this website are provided on
              an "as is" basis. I make no warranties, expressed or implied, and
              hereby disclaim all warranties including, without limitation,
              implied warranties of merchantability and fitness for a particular
              purpose.
            </p>
            <p>
              <strong>7.2</strong> I do not guarantee that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The website will be available at all times</li>
              <li>
                Information on the website is always accurate or up-to-date
              </li>
              <li>External links will remain active or safe</li>
              <li>Code samples or tutorials will work in all environments</li>
            </ul>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            8. Limitation of Liability
          </h2>
          <p className="text-fg-secondary leading-relaxed">
            In no event shall Saqib Bedar be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to
            business interruption) arising out of the use or inability to use
            the materials on this website, even if I have been notified of the
            possibility of such damage.
          </p>
        </section>

        {/* External Links */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            9. External Links
          </h2>
          <p className="text-fg-secondary leading-relaxed">
            This website contains links to external websites (GitHub, YouTube,
            LinkedIn, course platforms, etc.). I am not responsible for the
            content, privacy policies, or practices of these third-party sites.
            Visiting external links is at your own risk.
          </p>
        </section>

        {/* Project Repositories */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            10. Open Source Projects
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            Projects displayed on this website may link to open-source
            repositories:
          </p>
          <ul className="list-disc list-inside text-fg-secondary space-y-2 ml-4">
            <li>
              Each project has its own license specified in the repository
            </li>
            <li>
              Use of open-source code must comply with the respective license
            </li>
            <li>
              Contributions to projects are subject to contribution guidelines
            </li>
            <li>
              Private/ongoing projects may not be accessible to the public
            </li>
          </ul>
        </section>

        {/* Modifications */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            11. Modifications to Terms
          </h2>
          <p className="text-fg-secondary leading-relaxed">
            I reserve the right to revise these Terms & Conditions at any time
            without notice. By using this website, you agree to be bound by the
            current version of these terms. Changes will be effective
            immediately upon posting to this page.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            12. Governing Law
          </h2>
          <p className="text-fg-secondary leading-relaxed">
            These terms shall be governed by and construed in accordance with
            applicable laws, without regard to conflict of law principles. Any
            disputes arising from these terms shall be resolved through
            appropriate legal channels.
          </p>
        </section>

        {/* Severability */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            13. Severability
          </h2>
          <p className="text-fg-secondary leading-relaxed">
            If any provision of these Terms & Conditions is found to be
            unenforceable or invalid, that provision shall be limited or
            eliminated to the minimum extent necessary so that these terms shall
            otherwise remain in full force and effect.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-fg-primary mb-4">
            14. Contact Information
          </h2>
          <p className="text-fg-secondary leading-relaxed mb-4">
            If you have any questions about these Terms & Conditions, please
            contact me:
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
              to="/privacy-policy"
              className="px-4 py-2 text-sm font-medium text-fg-secondary bg-bg-card border border-border rounded-full hover:border-border-light hover:text-fg-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/services"
              className="px-4 py-2 text-sm font-medium text-fg-secondary bg-bg-card border border-border rounded-full hover:border-border-light hover:text-fg-primary transition-colors"
            >
              Services
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

export default Terms;
