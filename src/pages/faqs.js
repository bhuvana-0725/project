import React from "react";

const Faqs = () => {
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
    border: "2px solid #ccc", // ✅ Border added
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  };

  const headingStyle = {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "2rem",
    fontSize: "1.8rem",
  };

  const subheadingStyle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.3rem",
    marginTop: "2rem",
  };

  const questionStyle = {
    marginTop: "1.5rem",
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Frequently Asked Questions (FAQs)</h2>

        <h3 style={subheadingStyle}>General Questions</h3>
        <p style={questionStyle}>1. What is this website for?</p>
        <p>This website helps people report and find lost or found items efficiently.</p>

        <p style={questionStyle}>2. How does the lost and found process work?</p>
        <p>Users can report lost or found items, and the system helps match reports to reunite owners with their belongings.</p>

        <p style={questionStyle}>3. Is using the website free?</p>
        <p>Yes, reporting and searching for lost and found items is completely free.</p>

        <h3 style={subheadingStyle}>Reporting & Searching</h3>
        <p style={questionStyle}>4. How do I report a lost item?</p>
        <p>Click on "Report Lost Item," fill in the details, and submit the form.</p>

        <p style={questionStyle}>5. How do I report a found item?</p>
        <p>Click on "Report Found Item," provide item details and your contact information, then submit the report.</p>

        <p style={questionStyle}>6. How do I search for my lost item?</p>
        <p>Use the search bar to filter by category, date, or location of the lost item.</p>

        <p style={questionStyle}>7. Can I edit my report after submission?</p>
        <p>Yes, log in to your account and update the details in your report.</p>

        <h3 style={subheadingStyle}>Claiming Items</h3>
        <p style={questionStyle}>8. How do I claim a found item?</p>
        <p>Contact the finder through the provided details and provide proof of ownership.</p>

        <p style={questionStyle}>9. What proof do I need to claim my item?</p>
        <p>Proof can include receipts, serial numbers, photos, or other identifiable details.</p>

        <p style={questionStyle}>10. What if my lost item is already taken by someone else?</p>
        <p>If you suspect an issue, contact our support team for assistance.</p>

        <h3 style={subheadingStyle}>Privacy & Security</h3>
        <p style={questionStyle}>11. Is my personal information safe?</p>
        <p>Yes, we only share limited contact details necessary for item recovery.</p>

        <p style={questionStyle}>12. Can I report a suspicious or fraudulent claim?</p>
        <p>Yes, use the "Report an Issue" option to notify our team.</p>

        <h3 style={subheadingStyle}>Other Questions</h3>
        <p style={questionStyle}>13. How long are found items listed on the website?</p>
        <p>Found items remain listed until the owner claims them or after a set expiration period.</p>

        <p style={questionStyle}>14. Can businesses or organizations list lost and found items?</p>
        <p>Yes, businesses can create an account to manage lost and found items.</p>

        <p style={questionStyle}>15. Who do I contact for further assistance?</p>
        <p>Visit the "Contact Us" page or email our support team for help.</p>
      </div>
    </div>
  );
};

export default Faqs;


