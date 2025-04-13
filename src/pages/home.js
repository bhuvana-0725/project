import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials"; // ✅ Import Testimonials
import { FaSearch, FaCheckCircle } from "react-icons/fa";

const Home = () => {
  const styles = {
    container: {
      background: "linear-gradient(to right, #FFE5E5, #FFF8DC, #E2FFD9)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    contentWrapper: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      minHeight: "calc(100vh - 120px)",
      padding: "20px",
    },
    content: {
      textAlign: "center",
      maxWidth: "700px",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#333",
      lineHeight: "1.4",
      marginBottom: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    description: {
      fontSize: "1.2rem",
      marginBottom: "30px",
      color: "#444",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    button: {
      padding: "15px 30px",
      fontSize: "18px",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
      color: "white",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      transition: "background 0.3s ease",
    },
    lostBtn: {
      backgroundColor: "#e53935",
    },
    foundBtn: {
      backgroundColor: "#43a047",
    },
    spacer: {
      height: "80px", // Reduced spacer height to fit testimonials better
    },
  };

  return (
    <div style={styles.container}>
      <Navbar />

      <div style={styles.contentWrapper}>
        <div style={styles.content}>
          <h1 style={styles.heading}>
            Bringing Lost Things Back Where They Belong.
          </h1>
          <p style={styles.description}>
            Experience effortless recovery with our dedicated lost and found service.
          </p>

          <div style={styles.buttonContainer}>
            <Link to="/lostitem" style={{ ...styles.button, ...styles.lostBtn }}>
              <FaSearch /> Lost
            </Link>
            <Link to="/lostfoundui" style={{ ...styles.button, ...styles.foundBtn }}>
              <FaCheckCircle /> Found
            </Link>
          </div>
        </div>
      </div>

      <Testimonials /> {/* ✅ Add Testimonials here as a banner */}

      <div style={styles.spacer}></div>
      <Footer />
    </div>
  );
};

export default Home;










