import React from 'react';
import { useTicketForm } from './useTicketForm';
import TicketSelection from './TicketSelection';
import TicketDetails from './TicketDetails';
import TicketDisplay from './TicketDisplay';
import StepIndicator from './StepIndicator';
import EventDetails from './EventDetails';

export const TicketForm: React.FC = () => {
  const {
    formData,
    errors,
    ticket,
    selectedTicket,
    selectedTickets,
    currentStep,
    tickets,
    setFormData,
    setSelectedTickets,
    handleSelect,
    handleFileChange,
    handleSubmit,
    handleGenerateTicket,
    handleNextStep,
    handleBackStep,
  } = useTicketForm();

  const isFormValid = formData.fullName && formData.email && ticket !== null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-stone-900 to-cyan-900 px-8 py-10">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <StepIndicator
          currentStep={`Step ${currentStep}: ${
            currentStep === 1
              ? 'Select Ticket'
              : currentStep === 2
              ? 'Enter Details'
              : 'Review Ticket'
          }`}
        />

        {/* Conditional Rendering Based on Step */}
        {currentStep === 1 && (
          <>
            <EventDetails />
            <TicketSelection
              tickets={tickets}
              selectedTicket={selectedTicket}
              handleSelect={handleSelect}
            />
            {/* Number of Tickets */}
            <section>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">
                  Number of Tickets
                </h2>
                <select
                  className="w-full p-2 rounded bg-custom-gray text-white cursor-pointer"
                  value={selectedTickets}
                  onChange={(e) => setSelectedTickets(Number(e.target.value))}
                >
                  {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </section>
          </>
        )}

        {currentStep === 2 && (
          <>
            <TicketDetails
              formData={formData}
              errors={errors}
              setFormData={setFormData}
              handleFileChange={handleFileChange}
              handleSubmit={handleSubmit}
            />
            <button
              onClick={handleGenerateTicket}
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Generate Ticket
            </button>
          </>
        )}

        {currentStep === 3 && ticket && (
          <>
            <TicketDisplay ticket={ticket} />
            <div className="text-center text-green-500 mt-4">
              <h3>Ticket Generated Successfully!</h3>
              <p>Your ticket details are ready for review.</p>
            </div>
          </>
        )}

        {/* Step Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <button
              onClick={handleBackStep}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Back
            </button>
          )}

          {currentStep < 3 && (
            <button
              onClick={handleNextStep}
              disabled={!isFormValid}
              className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
