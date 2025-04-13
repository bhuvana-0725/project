import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showHelpCenter, setShowHelpCenter] = useState(false); // ✅ New state

  const backgroundColor = "#ffeef2";

  const footerStyle = {
    backgroundColor,
    color: "#222",
    padding: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1.5rem",
    fontSize: "0.9rem",
    textAlign: "left",
    borderTop: "2px solid #bbb",
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const headingStyle = {
    marginBottom: "0.5rem",
    fontWeight: "bold",
    fontSize: "1rem",
  };

  const linkStyle = {
    color: "#444",
    textDecoration: "none",
    margin: "0.25rem 0",
    cursor: "pointer",
  };

  const bottomBarStyle = {
    textAlign: "center",
    marginTop: "0",
    color: "#444",
    fontSize: "0.8rem",
    backgroundColor,
    padding: "1rem 0",
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalContentStyle = {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    maxWidth: "700px",
    width: "90%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    position: "relative",
    maxHeight: "80vh",
    overflowY: "auto",
  };

  const closeButtonStyle = {
    marginTop: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <>
      <footer style={footerStyle}>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Quick Links</h4>
          <Link to="/" style={linkStyle}>Home</Link>
          <span style={linkStyle} onClick={() => setShowAbout(true)}>About</span>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/faqs" style={linkStyle}>FAQs</Link>
        </div>

        <div style={sectionStyle}>
          <h4 style={headingStyle}>Legal</h4>
          <Link to="/terms" style={linkStyle}>Terms</Link>
          <span style={linkStyle} onClick={() => setShowPrivacy(true)}>Privacy</span>
          <span style={linkStyle} onClick={() => setShowDisclaimer(true)}>Disclaimer</span>
        </div>

        <div style={sectionStyle}>
          <h4 style={headingStyle}>Support</h4>
          <span style={linkStyle} onClick={() => setShowHelpCenter(true)}>Help Center</span>
          <Link to="/report" style={linkStyle}>Report an Issue</Link>
        </div>

        <div style={sectionStyle}>
          <h4 style={headingStyle}>Social & Updates</h4>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</a>
        </div>
      </footer>

      <div style={bottomBarStyle}>
        <p>© {new Date().getFullYear()} FindMyStuff.com . All rights reserved.</p>
      </div>

      {/* About Modal */}
      {showAbout && (
        <div style={modalOverlayStyle} onClick={() => setShowAbout(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>About FindMyStuff.com</h2>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#333" }}>
              <b>FindMyStuff.com</b> is a community-driven lost and found platform designed to help individuals and organizations easily report and recover lost or found items. Whether it's a misplaced wallet, a lost phone, or a valuable item found in a public space, our platform provides a centralized, secure, and user-friendly space to reconnect people with their belongings.
              <br /><br />
              Our goal is to simplify the process of finding lost items and improve the chances of their return through detailed reporting forms, searchable listings, and communication tools. By allowing both individual users and organizations (such as universities, malls, or event venues) to participate, we increase the visibility and accessibility of lost and found cases.
              <br /><br />
              We prioritize data privacy, user trust, and community collaboration. With features like photo uploads, storage location info, status tracking, and profile management, FindMyStuff.com aims to be the go-to digital solution for solving everyday lost and found challenges.
              <br /><br />
              💡 Got feedback or questions? Reach out at <b>info@findmystuff.com</b>
            </p>
            <button style={closeButtonStyle} onClick={() => setShowAbout(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Help Center Modal */}
      {showHelpCenter && (
        <div style={modalOverlayStyle} onClick={() => setShowHelpCenter(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>Help Center</h2>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#333" }}>
              Welcome to the FindMyStuff.com Help Center! We're here to guide you through using the platform effectively.
              <br /><br />
              <b>1. How to Report a Lost or Found Item:</b><br />
              - Use the "Report Lost" or "Report Found" pages from the homepage.<br />
              - Fill in details clearly, including item description, location, and contact info.<br /><br />

              <b>2. Tips for Better Matching:</b><br />
              - Include clear images of the item.<br />
              - Mention unique identifiers (brand, color, tags, etc.).<br /><br />

              <b>3. Staying Safe:</b><br />
              - Avoid sharing sensitive information.<br />
              - Meet in public places when arranging handovers.<br /><br />

              <b>4. If You Suspect Misuse:</b><br />
              - Please use the "Report an Issue" link in the footer.<br />
              - We take misuse seriously and will investigate accordingly.<br /><br />

              <b>5. Upload Guidelines:</b><br />
              - Use JPG, PNG, or PDF files for uploads.<br />
              - Max file size: 5MB per file.<br /><br />

              <b>6. Location Accuracy:</b><br />
              - Enter the most precise location to help others nearby.<br /><br />

              <b>Need more help?</b> Contact us at <b>support@findmystuff.com</b>.
            </p>
            <button style={closeButtonStyle} onClick={() => setShowHelpCenter(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div style={modalOverlayStyle} onClick={() => setShowDisclaimer(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>Disclaimer</h2>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#333" }}>
              The information provided on FindMyStuff.com is intended to assist users in reporting and locating lost and found items. While we strive to maintain accurate and up-to-date listings, FindMyStuff.com makes no guarantees regarding the recovery of lost items or the accuracy of information submitted by users.
              <br /><br />
              We do not verify the authenticity or ownership of the items reported and are not responsible for any direct or indirect losses or damages arising from the use of this platform. Users are advised to exercise caution and good judgment when communicating or arranging exchanges with others through this site.
              <br /><br />
              By using this website, you agree to our terms of service and acknowledge that all use is at your own risk. For concerns, contact us at <b>support@findmystuff.com</b>.
            </p>
            <button style={closeButtonStyle} onClick={() => setShowDisclaimer(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div style={modalOverlayStyle} onClick={() => setShowPrivacy(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>Privacy Policy</h2>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#333" }}>
              At <b>FindMyStuff.com</b>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our platform.
              <br /><br />
              <b>1. Information We Collect</b><br />
              - User-provided details when you report items or contact support.<br />
              - Technical data such as IP address, browser, and usage patterns.
              <br /><br />
              <b>2. How We Use Your Information</b><br />
              - To connect users for lost/found matches.<br />
              - To improve the platform and respond to inquiries.<br />
              - To ensure security and prevent misuse.
              <br /><br />
              <b>3. Data Sharing</b><br />
              - No selling of personal data.<br />
              - Shared only when needed (e.g., communication or legal requirements).
              <br /><br />
              <b>4. Data Security</b><br />
              - Industry-standard protection is used, but no system is 100% secure.
              <br /><br />
              <b>5. Your Rights</b><br />
              - You can request access, corrections, or deletion of your info by contacting us at <b>privacy@findmystuff.com</b>.
              <br /><br />
              <b>6. Cookies</b><br />
              - Used to enhance experience. Manage in browser settings.
              <br /><br />
              <b>7. Policy Updates</b><br />
              - This policy may be revised occasionally and posted here.
              <br /><br />
              📅 <i>Last updated: April 2025</i>
            </p>
            <button style={closeButtonStyle} onClick={() => setShowPrivacy(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;











