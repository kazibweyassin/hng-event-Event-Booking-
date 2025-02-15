import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import  "../../assets/images/bg.png"

const Home = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f4f6",
    padding: "1.5rem",
    background: "linear-gradient(135deg, #f6f7f9 0%, #e9ecef 100%)",
  };

  const titleContainerStyle = {
    textAlign: "center",
    maxWidth: "42rem",
    margin: "0 auto 2rem auto"
  };

  const titleStyle = {
    fontSize: "3.5rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "1rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)"
  };

  const subtitleStyle = {
    fontSize: "1.25rem",
    color: "#4b5563",
    lineHeight: "1.75",
    marginBottom: "2rem"
  };

  const buttonStyle = {
    backgroundColor: "#065c55",
    color: "white",
    padding: "1rem 2rem",
    borderRadius: "0.5rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    border: "none"
  };

  const buttonHoverStyle = {
    backgroundColor: "#065c55", 
    transform: "translateY(-2px)",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)"
  };

  return (
    <section style={containerStyle}>
      <div style={titleContainerStyle}>
        <div>
          <h2 style={titleStyle}>
            Hng Event Ticket Generator
          </h2>
        </div>
        <div>
          <p style={subtitleStyle}>
            The only solution you need to sell, distribute, and validate personalized event tickets
          </p>
        </div>
      </div>

      <Link to="/Ticket" style={{ textDecoration: "none", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", color: "#374151", marginBottom: "1rem" }}>
          Click to proceed
        </h1>
        <button 
          style={buttonStyle}
          onMouseOver={(e) => {
            Object.assign(e.target.style, buttonHoverStyle);
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
            e.target.style.transform = "none";
            e.target.style.boxShadow = buttonStyle.boxShadow;
          }}
        >
          Generate Ticket
        </button>
      </Link>
    </section>
  );
};

export default Home;
