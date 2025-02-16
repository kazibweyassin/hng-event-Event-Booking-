import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import TicketImg from "../../assets/images/Ticket.png";

const Home = () => {
  return (
    <section className="home-section">
      {/* Home Copy Section */}
      <div className="home-copy">
        <div className="home-copy-wrapper">
          <h1>Event Tcket Generator</h1>
        </div>
      </div>

      {/* Ticket Selection Button */}
      <Link to="/Ticket" className="home-tagline">
        <button className="ticket-selection">CLICK TO PROCEED</button>
      </Link>
    </section>
  );
};

export default Home;
