import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [preview, setPreview] = useState("");

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
    setIsEditing(false);
  };

  const handleSaveProfile = () => {
    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;

    setUser({ name, email, phone, location });
    toggleProfileModal();
  };

  const handleSignOut = () => {
    localStorage.removeItem("userToken");
    setUser(null);
    setShowProfileModal(false);
    navigate("/");
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 40px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
    height: "100px",
  };

  const logoStyle = {
    fontWeight: "bold",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
  };

  const navLinks = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: location.pathname === path ? "#7b1fa2" : "black",
    fontWeight: location.pathname === path ? "bold" : "normal",
  });

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const profileIconStyle = {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#4caf50",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const modalOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  };

  const modalContent = {
    background: "#fff",
    padding: "20px 30px",
    borderRadius: "12px",
    width: "400px",
    position: "relative",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  };

  const closeButton = {
    position: "absolute",
    right: "15px",
    top: "10px",
    fontSize: "24px",
    cursor: "pointer",
  };

  const formWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "stretch",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    width: "100%",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "4px",
  };

  const submitButton = {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4caf50",
    color: "white",
    fontSize: "14px",
    cursor: "pointer",
    width: "100%",
    marginTop: "10px",
  };

  const profileImageContainer = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 auto",
    overflow: "hidden",
    textAlign: "center",
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={logoStyle}>
          <img
            src="/images/logo1.png"
            alt="Logo"
            style={{ width: "90px", marginRight: "10px" }}
          />
          FindMyStuff.com
        </div>
        <div style={navLinks}>
          <Link to="/" style={linkStyle("/")}>Home</Link>
          <Link to="/reportlost" style={linkStyle("/reportlost")}>📄 Report Lost</Link>
          <Link to="/reportfound" style={linkStyle("/reportfound")}>🧾 Report Found</Link>

          {user ? (
            <>
              <div style={profileIconStyle} onClick={toggleProfileModal}>
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <button style={buttonStyle} onClick={handleSignOut}>Sign Out</button>
            </>
          ) : (
            <>
              <button style={buttonStyle} onClick={toggleProfileModal}>Profile</button>
              <button style={buttonStyle} onClick={handleSignOut}>Sign Out</button>
            </>
          )}
        </div>
      </nav>

      {showProfileModal && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <span style={closeButton} onClick={toggleProfileModal}>&times;</span>
            <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
              User Profile
            </h2>

            {user && !isEditing ? (
              <div style={{ lineHeight: "1.8" }}>
                <div style={profileImageContainer}>
                  {preview ? (
                    <img
                      src={preview}
                      alt="User"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <span>Preview</span>
                  )}
                </div>
                <div style={{ textAlign: "left", marginTop: "15px" }}>
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Location:</strong> {user.location}</p>
                </div>
                <button
                  style={{ ...submitButton, marginTop: "20px" }}
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <form style={formWrapper}>
                <div style={profileImageContainer}>
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <span style={{ color: "#888" }}>Preview</span>
                  )}
                </div>

                <label style={labelStyle}>Profile Picture:</label>
                <input
                  type="file"
                  accept="image/*"
                  style={inputStyle}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => setPreview(reader.result);
                      reader.readAsDataURL(file);
                    }
                  }}
                />

                <label style={labelStyle}>Full Name:</label>
                <input id="fullName" type="text" defaultValue={user?.name || ""} placeholder="Enter your full name" style={inputStyle} />

                <label style={labelStyle}>Email:</label>
                <input id="email" type="email" defaultValue={user?.email || ""} placeholder="Enter your email" style={inputStyle} />

                <label style={labelStyle}>Phone Number:</label>
                <input id="phone" type="tel" defaultValue={user?.phone || ""} placeholder="Enter your phone number" style={inputStyle} />

                <label style={labelStyle}>Location:</label>
                <input id="location" type="text" defaultValue={user?.location || ""} placeholder="Enter your location" style={inputStyle} />

                <button type="button" style={submitButton} onClick={handleSaveProfile}>
                  Save Profile
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;








