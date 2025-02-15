import React, { useContext, useRef } from "react";
import { FormContext } from "../../context/FormContext";
import html2canvas from "html2canvas";
import "./ready.css"; // Create your own styling as needed

const Ready = () => {
  const { formData } = useContext(FormContext);
  const ticketRef = useRef(null);

  const handleDownload = () => {
    if (ticketRef.current) {
      html2canvas(ticketRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = "ticket.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  return (
    <div className="ready-step">
      <div ref={ticketRef} className="ticket">
        <h1>Your Ticket</h1>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Ticket Type:</strong> {formData.ticketType}
        </p>
        <p>
          <strong>Ticket Count:</strong> {formData.ticketCount}
        </p>
        <p>
          <strong>Special Request:</strong> {formData.specialRequest}
        </p>
        {formData.avatar && (
          <div className="ticket-avatar">
            <img
              src={formData.avatar}
              alt="Uploaded Avatar"
              style={{ maxWidth: "200px" }}
            />
          </div>
        )}
      </div>
      <button onClick={handleDownload}>Download Ticket</button>
    </div>
  );
};

export default Ready;
