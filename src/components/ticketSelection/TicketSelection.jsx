import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import "./ticketSelection.css";

const TicketSelection = () => {
    // Access form data and functions from context
    const { formData, setFormData, nextStep } = useContext(FormContext);

    // Handle ticket type selection
    const handleTicketChange = (type) => {
        setFormData({ ...formData, ticketType: type });
    };

    return (
        <>
            {/* Header Section */}
            <div className="form-header">
                <h2>Ticket Selection</h2>
                <p>Step 1/3</p>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
                <div style={{ width: "35%" }}></div>
                <div style={{ width: "65%" }}></div>
            </div>

            {/* Form Body */}
            <div className="form-body">
                {/* Event Information */}
                <div className="event-info">
                    <h3>Techember Fest ’25</h3>
                    <p>Join us for an unforgettable experience at <br /> Techember Fest! Secure your spot now.</p>
                    <div>
                        <p>📍 Kampala, Uganda</p>
                        <p>| |</p>
                        <p>March 15, 2025 | 7:00 PM</p>
                    </div>
                </div>

                <hr />

                {/* Ticket Type Selection */}
                <div className="ticket-type-container">
                    <p>Select Ticket Type:</p>
                    <div className="ticket-type">
                        {['Regular', 'VIP', 'VVIP'].map((type, index) => (
                            <div
                                key={index}
                                className={`ticket-type-box ${formData.ticketType === type ? "selected" : ""}`}
                                onClick={() => handleTicketChange(type)}
                            >
                                <b>{type === "Regular" ? "FREE" : "$150"}</b>
                                <p className="ticket-type-name">{type} ACCESS</p>
                                <p>20/25</p> {/* Placeholder availability count */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Number of Tickets Selection */}
                <div className="ticket-amount">
                    <p>Number of Tickets</p>
                    <select
                        value={formData.numberOfTickets}
                        onChange={(e) => setFormData({ ...formData, numberOfTickets: parseInt(e.target.value) })}
                    >
                        {[...Array(5)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Form Buttons */}
                <div className="form-btn">
                    <button className="cancel-btn">Cancel</button>
                    <button className="next-btn" onClick={nextStep}>Next</button>
                </div>
            </div>
        </>
    );
};

export default TicketSelection;
