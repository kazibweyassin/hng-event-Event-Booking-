import { useState, useEffect } from 'react';

interface FormData {
  fullName: string;
  email: string;
  avatar: string;
  specialRequest: string;
  profilePhoto: File | null;
}

interface Ticket {
  type: string;
  price: string;
  fullName?: string;
  email?: string;
  specialRequest?: string;
}

export const useTicketForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    avatar: '',
    specialRequest: '',
    profilePhoto: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTickets, setSelectedTickets] = useState(1);

  const tickets: Ticket[] = [
    { type: 'Regular ACCESS 20/52', price: 'Free' },
    { type: 'VIP ACCESS', price: '$150' },
    { type: 'VVIP ACCESS', price: '$200' },
  ];

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('ticketForm');
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  // Save form data to localStorage
  useEffect(() => {
    localStorage.setItem('ticketForm', JSON.stringify(formData));
  }, [formData]);

  const handleSelect = (index: number) => {
    setSelectedTicket(index);
    setTicket(tickets[index]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, avatar: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
  };

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

  const handleNextStep = () => {
    if (currentStep === 1 && selectedTicket !== null) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 2 && formData.fullName && formData.email) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return {
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
  };
};