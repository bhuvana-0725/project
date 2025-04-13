import React, { useState } from "react";

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    issueType: "",
    description: "",
    name: "",
    email: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment") {
      setFormData({ ...formData, attachment: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Issue submitted:", formData);
    alert("Thank you! Your issue has been submitted.");
    setFormData({
      issueType: "",
      description: "",
      name: "",
      email: "",
      attachment: null,
    });
  };

  const formStyle = {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "2rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    margin: "0.5rem 0 1rem",
    border: "1px solid #aaa",
    borderRadius: "4px",
  };

  const labelStyle = {
    fontWeight: "bold",
  };

  const buttonStyle = {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={formStyle}>
      <h2>Report an Issue</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Issue Type</label>
        <select
          name="issueType"
          value={formData.issueType}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select an issue type</option>
          <option value="bug">Bug/Error</option>
          <option value="misuse">User Misuse</option>
          <option value="data">Incorrect Information</option>
          <option value="other">Other</option>
        </select>

        <label style={labelStyle}>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          placeholder="Describe the issue in detail..."
          style={inputStyle}
          required
        ></textarea>

        <label style={labelStyle}>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          style={inputStyle}
        />

        <label style={labelStyle}>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Attach Screenshot (optional)</label>
        <input
          type="file"
          name="attachment"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default ReportIssue;

