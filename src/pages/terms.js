import React from "react";

const Terms = () => {
  const pageStyle = {
    background: "linear-gradient(to right, #FFE5E5, #FFF8DC, #E2FFD9)",
    minHeight: "100vh",
    padding: "2rem 0",
  };

  const sectionStyle = {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
    color: "#333",
    background: "#ffffffcc",
    borderRadius: "1rem",
    border: "2px solid #ccc",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  };

  const headingStyle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.8rem",
    marginBottom: "2rem",
  };

  const subheadingStyle = {
    fontWeight: "bold",
    marginTop: "1.5rem",
    fontSize: "1.1rem",
  };

  return (
    <div style={pageStyle}>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Terms and Conditions</h2>

        <p style={subheadingStyle}>1. Introduction</p>
        <p>
          Welcome to our Lost and Found website. By using this website, you
          agree to comply with and be bound by the following terms and
          conditions. If you do not agree, please do not use this service.
        </p>

        <p style={subheadingStyle}>2. User Responsibilities</p>
        <ul>
          <li>Users must provide accurate and truthful information when reporting lost or found items.</li>
          <li>Users must not post fraudulent, misleading, or illegal content.</li>
          <li>Users must not claim an item they do not rightfully own.</li>
        </ul>

        <p style={subheadingStyle}>3. Reporting Lost and Found Items</p>
        <ul>
          <li>Reports must include detailed and honest descriptions.</li>
          <li>Found items should be reported promptly with correct contact details.</li>
          <li>Users claiming an item must provide sufficient proof of ownership.</li>
        </ul>

        <p style={subheadingStyle}>4. Liability Disclaimer</p>
        <ul>
          <li>We do not guarantee that lost items will be recovered or matched with their owners.</li>
          <li>We are not responsible for any disputes between users regarding lost and found items.</li>
          <li>We do not verify the authenticity of posted reports and rely on user honesty.</li>
        </ul>

        <p style={subheadingStyle}>5. Prohibited Activities</p>
        <ul>
          <li>Posting false, misleading, or offensive content.</li>
          <li>Using the website for fraudulent purposes.</li>
          <li>Sharing personal contact details publicly in listings.</li>
        </ul>

        <p style={subheadingStyle}>6. Privacy Policy</p>
        <p>
          Personal information is protected and will not be shared publicly.
          Contact details are only provided to relevant parties for item recovery.
        </p>

        <p style={subheadingStyle}>7. Account Termination</p>
        <p>
          We reserve the right to suspend or terminate accounts violating our
          terms. Any attempt to misuse the platform may result in a ban.
        </p>

        <p style={subheadingStyle}>8. Changes to Terms</p>
        <p>
          We may update these terms at any time. Continued use of the site after
          changes means you accept the updated terms.
        </p>

        <p style={subheadingStyle}>9. Contact Us</p>
        <p>
          For any questions regarding these terms, please visit our Contact Us
          page or email support.
        </p>
      </div>
    </div>
  );
};

export default Terms;
