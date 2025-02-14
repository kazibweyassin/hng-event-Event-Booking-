// types/index.ts
export interface TicketType {
    type: string;
    price: string;
  }
  
  export interface FormData {
    selectedTicket: number | null;
    quantity: number;
    fullName: string;
    email: string;
    avatar: string;
    specialRequest: string;
  }
  
  export interface StepProps {
    formData: FormData;
    setFormData: (data: FormData) => void;
    onNext: () => void;
    onBack?: () => void;
  }