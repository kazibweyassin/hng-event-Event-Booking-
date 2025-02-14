import React from 'react';

interface TicketDisplayProps {
  ticket: any;
}

const TicketDisplay: React.FC<TicketDisplayProps> = ({ ticket }) => {
  return (
    <div className="mt-6 bg-gray-800 p-6 rounded-xl shadow-lg text-center">
      <h3 className="text-lg font-bold text-cyan-400">Your Conference Ticket</h3>
      <p className="font-semibold text-white">{ticket.fullName}</p>
      <p className="text-gray-400">{ticket.email}</p>
      <img
        src={ticket.avatar}
        alt="Avatar"
        className="w-24 h-24 rounded-full mx-auto mt-3 border-4 border-cyan-400"
      />
    </div>
  );
};

export default TicketDisplay;
