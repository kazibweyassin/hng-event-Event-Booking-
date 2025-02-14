import React, { useState } from 'react';

interface TicketDetailsProps {
  formData: any;
  errors: Record<string, string>;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const tickets = [
  { type: 'Regular ACCESS 20/52', price: 'Free' },
  { type: 'VIP ACCESS', price: '$150' },
  { type: 'VVIP ACCESS', price: '$200' },
];

const TicketDetails: React.FC<TicketDetailsProps> = ({
  formData,
  errors,
  setFormData,
  handleFileChange,
  handleSubmit,
}) => {
  // ✅ Correct: Hooks called inside the component
  const [ticket, setTicket] = useState<any>(null);
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

  // Generate Ticket function
  const handleGenerateTicket = () => {
    if (selectedTicket !== null) {
      const ticketToGenerate = tickets[selectedTicket];
      setTicket({
        ...ticketToGenerate,
        fullName: formData.fullName,
        email: formData.email,
        specialRequest: formData.specialRequest,
      });
    } else {
      alert('Please select a ticket before generating.');
    }
  };

  return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-stone-900 to-cyan-900 px-8 py-10">
      <h2 className="text-xl font-bold mb-4 text-center text-white">Conference Ticket Generator</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Full Name Input */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            className={`w-full border p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 transition-all ${
              errors.fullName ? 'border-red-500' : 'border-gray-600'
            }`}
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
          {errors.fullName && (
            <p className="text-red-400 text-sm mt-1 flex items-center">
              <span className="mr-1">⚠</span>
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            className={`w-full border p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 transition-all ${
              errors.email ? 'border-red-500' : 'border-gray-600'
            }`}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1 flex items-center">
              <span className="mr-1">⚠</span>
              {errors.email}
            </p>
          )}
        </div>

        {/* Avatar Upload */}
        <div className="form-group">
          <label className="block text-white mb-2">Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 rounded-lg bg-gray-700 text-white file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0 file:text-sm file:font-semibold
              file:bg-cyan-900 file:text-white hover:file:bg-cyan-800"
            onChange={handleFileChange}
          />
        </div>

        {/* Special Request */}
        <div className="form-group">
          <label className="block text-white mb-2">Special Request</label>
          <textarea
            placeholder="Enter any special requirements..."
            rows={4}
            className="w-full border p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
              focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
            value={formData.specialRequest}
            onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-gradient-to-t from-stone-900 to-cyan-900 rounded-lg px-6 py-2.5 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Back
          </button>
          <button
            onClick={handleGenerateTicket}
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Generate Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketDetails;