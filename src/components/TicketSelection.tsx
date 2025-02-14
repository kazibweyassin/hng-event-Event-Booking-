import React from 'react';

interface TicketSelectionProps {
  tickets: { type: string; price: string }[];
  selectedTicket: number | null;
  handleSelect: (index: number) => void;
}

const TicketSelection: React.FC<TicketSelectionProps> = ({
  tickets,
  selectedTicket,
  handleSelect,
}) => {
  return (
    <div className="space-y-4">
      {tickets.map((ticket, index) => (
        <div
          key={index}
          className={`p-4 border rounded-lg cursor-pointer ${
            selectedTicket === index ? 'bg-blue-100 border-blue-500' : 'bg-white'
          }`}
          onClick={() => handleSelect(index)}
        >
          <h3 className="font-semibold">{ticket.type}</h3>
          <p>{ticket.price}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketSelection;